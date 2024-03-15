import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice'
import { formatCurrency } from '../../utils/helpers'

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)

  if (!totalCartQuantity) return null

  return (
    <div className="bg-zinc-700 text-zinc-300 uppercase p-4 sm:px-8 text-base md:text-xl flex items-center justify-between">
      <p className="text-zinc-400 font-semibold space-x-4 sm:space-x-8">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
  }
  
  export default CartOverview