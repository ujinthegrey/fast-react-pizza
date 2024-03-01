import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"

function Header() {
    return (
      <header className="bg-emerald-400 uppercase p-4 sm:px-8 border-b border-zinc-300 flex items-center justify-between">
        <Link to="/"className="tracking-widest font-bold" >Fast React Pizza</Link>
        <SearchOrder />
        <Username />
      </header>
    )
  }
  
  export default Header