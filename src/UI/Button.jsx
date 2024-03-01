import { Link } from "react-router-dom"

function Button({ children, disabled, to, type }) {

  const base = 'bg-emerald-400 hover:bg-emerald-300 uppercase font-bold tracking-widest rounded-full transition-colors focus:outline-none focus:ring focus:ring-emerald-300 focus:bg-emerald-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-300'

  const styles = {
    primary: base + ' py-4 px-8 md:px-10',
    small: base + ' text-xs py-1 px-2 md:px-4'
  }  
 
  if (to) return (
    <Link to={to} className={styles[type]}>
      {children}
    </Link>
  )

  return (
    <button disabled={disabled} className={styles[type]}>
        {children}
    </button>
  )
}
export default Button