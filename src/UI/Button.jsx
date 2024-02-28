import { Link } from "react-router-dom"

function Button({ children, disabled, to }) {
  const className = 'bg-emerald-400 hover:bg-emerald-300 uppercase font-bold py-4 px-8 tracking-widest rounded-full transition-colors focus:outline-none focus:ring focus:ring-emerald-300 focus:bg-emerald-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-300 md:px-10'
  if (to) return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )

  return (
    <button disabled={disabled} className={className}>
        {children}
    </button>
  )
}
export default Button