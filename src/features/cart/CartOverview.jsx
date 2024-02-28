import { Link } from "react-router-dom";

function CartOverview() {
    return (
      <div className="bg-zinc-700 text-zinc-300 uppercase p-4 sm:px-8 text-sm md:text-base flex items-center justify-between">
        <p className="text-zinc-400 font-semibold space-x-4 sm:space-x-8">
          <span>23 pizzas</span>
          <span>$23.45</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    );
  }
  
  export default CartOverview;