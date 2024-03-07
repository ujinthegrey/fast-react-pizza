import LinkButton from '../../UI/LinkButton'
import Button from '../../UI/Button'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'
import { getUsername } from '../user/userSlice'

function Cart() {
  const cart = useSelector(getCart)
  const username = useSelector(getUsername)
  const dispatch = useDispatch()

  if (!cart.length) return <EmptyCart/>

  return (
    <div className='p-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='mt-3 divide-y-4 divide-zinc-100 border-b-4'>
        {cart.map(item => <CartItem item={item} key={item.pizzaId}/>)}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button type="primary" to="/order/new">Order pizzas</Button>
        <Button type='secondary' onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  )
}

export default Cart