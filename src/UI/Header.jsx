import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"

function Header() {
    return (
      <header className="bg-emerald-500 uppercase p-4 border-b border-zinc-300">
        <Link to="/"className="tracking-[.5rem]" >Fast React Pizza</Link>
        <SearchOrder />
        <Username />
      </header>
    )
  }
  
  export default Header