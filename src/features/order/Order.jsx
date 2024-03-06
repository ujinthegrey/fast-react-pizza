// Test ID: IIDSAT Test 2 ID: CQE92U
import OrderItem from './OrderItem'

import { useFetcher, useLoaderData } from "react-router-dom"
import { getOrder } from "../../services/apiRestaurant"

import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
  } from "../../utils/helpers"
import { useEffect } from 'react'
    
  function Order() {

    const order = useLoaderData()

    const fetcher = useFetcher()

    useEffect(function() {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')
    }, [fetcher])

    console.log(fetcher.data)

    // Everyone can search for all orders, so for privacy reasons we're gonna exclude names or address, these are only for the restaurant staff
    const {
      id,
      status,
      priority,
      priorityPrice,
      orderPrice,
      estimatedDelivery,
      cart,
    } = order
    const deliveryIn = calcMinutesLeft(estimatedDelivery)
  
    return (
      <div className="px-3 py-6 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-xl font-semibold">Order # {id} status</h2>  
          <div className="space-x-2">
            {priority && <span className="bg-red-500 rounded-full py-1 px-4 text-sm uppercase font-semibold text-red-200 tracking-widest">Priority</span>}
            <span className="bg-emerald-600 rounded-full py-1 px-4 text-sm uppercase font-semibold text-emerald-200 tracking-widest">{status} order</span>
          </div>
        </div>
  
        <div className="flex items-center justify-between flex-wrap gap-2 bg-zinc-300 p-5">
          <p className="font-medium">
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="text-sm text-zinc-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
        </div>

        <ul className='divide-y-4 divide-zinc-100 border-b-4'>
          {cart.map((item) => (
            <OrderItem
              item={item}
              key={item.pizzaId}
              isLoadingIngredients={fetcher.state === 'loading'}
              ingredients={
                fetcher?.data?.find((el) => el.id === item.pizzaId)
                  ?.ingredients ?? []
              }
            />
          ))}       
        </ul>
  
        <div className="space-y-3 bg-zinc-300 p-5">
          <p className="text-sm font-medium text-zinc-500">Price pizza: {formatCurrency(orderPrice)}</p>
          {priority && <p className="text-sm font-medium text-zinc-500">Price priority: {formatCurrency(priorityPrice)}</p>}
          <p className="font-bold text-zinc-500">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
        </div>
      </div>
    );
  }

  export async function loader({ params }) {
    const order = await getOrder(params.orderId)
    return order
  }

  export default Order