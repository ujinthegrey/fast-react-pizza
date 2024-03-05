import { Link } from "react-router-dom"

function Button({ children, disabled, to, type, onClick }) {

  const base = 'bg-emerald-400 hover:bg-emerald-300 uppercase font-bold tracking-widest rounded-full transition-colors focus:outline-none focus:ring focus:ring-emerald-300 focus:bg-emerald-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-300 text-sm'

  const styles = {
    primary: base + ' ' + 'py-4 px-8 md:px-10',
    small: base + ' ' + 'text-xs py-1 px-2 md:px-4',
    round: base + ' ' + 'text-sm px-2 py-1 md:px-3',
    secondary: 'py-3.5 px-8 md:px-10 border-2 text-zinc-400 hover:text-zinc-500 border-zinc-300 hover:bg-zinc-300 uppercase font-bold tracking-widest rounded-full transition-colors focus:outline-none focus:ring focus:ring-zinc-400 focus:bg-zinc-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-300 text-sm',
  }  
 
  if (to) return (
    <Link to={to} className={styles[type]}>
      {children}
    </Link>
  )

  if (onClick) return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
    </button>
  )

  return (
    <button disabled={disabled} className={styles[type]}>
        {children}
    </button>
  )
}
export default Button