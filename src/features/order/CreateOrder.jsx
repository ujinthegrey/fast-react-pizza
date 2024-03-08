import { useState } from "react"
import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { createOrder } from "../../services/apiRestaurant"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice"
import { fetchAddress, getUsername } from '../user/userSlice'
import { formatCurrency } from '../../utils/helpers'
import Button from "../../UI/Button"
import EmptyCart from '../cart/EmptyCart'
import store from '../../store'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  )

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false)
  const navigation = useNavigation()
  const username = useSelector(getUsername)
  const { 
          status: addressStatus,
          position,
          address,
          error: errorAddress
        } = useSelector((state) => state.user)
  const isLoadingAddress = addressStatus === 'loading'
  const isSubmitting = navigation.state === "submitting"
  const formErrors = useActionData()
  const cart = useSelector(getCart)
  const totalCartPrice = useSelector(getTotalCartPrice)
  const priorityPrice = withPriority ? totalCartPrice * .2 : 0
  const totalPrice = totalCartPrice + priorityPrice
  const dispatch = useDispatch()

  console.log(position)

  if (!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let&apos;s go!</h2>

      {/* <Form method="POST" action="/post/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input grow" defaultValue={username}/>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full"/>
          {formErrors?.phone && <p className="text-sm mt-2 text-red-400 bg-red-100 p-2 rounded-full">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required 
              className="input w-full"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
                  {addressStatus === 'error' && (
              <p className="text-sm mt-2 text-red-400 bg-red-100 p-2 rounded-full">
                {errorAddress}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && <span className="absolute right-2 z-10 top-1.5">
            <Button
                type='small'
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(fetchAddress())
                }}
                disabled={isLoadingAddress}
            >Get position</Button>
          </span>}
    

        </div>

        <div className="mb-10 flex gap-5 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-emerald-500 focus:ring focus:ring-emerald-200"
          />
          <label htmlFor="priority" className="font-medium">Want to give your order priority?</label>
        </div>

        <div>
          <input type='hidden' name="cart" value={JSON.stringify(cart)}/>
          <input
            type='hidden'
            name='position'
            value={position.letitude && position.longitude? `${position.latitude}, ${position.longitude}` : ''} />
          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting ? 'Plasing order...' : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true"
  }

  console.log(order)

  const errors = {}
  if (!isValidPhone(order.phone)) errors.phone = 'Please enter you correct phone number. We might need co cinnect you.'
  if (Object.keys(errors).length > 0) return errors

  // if everithing is ok, create a new order and redirect
  const newOrder = await createOrder(order)

  // do not overuse this trick
  store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder