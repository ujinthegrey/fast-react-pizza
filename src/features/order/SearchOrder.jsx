import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SearchOrder() {

  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    if (query.toLowerCase() === 'new') {
      setQuery("")
      return
    }
    navigate(`/order/${query}`)
    setQuery("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            placeholder="Search Order #"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-28
              sm:w-64
              focus:w-32
              sm:focus:w-72
              focus:outline-none
              focus:ring
              focus:ring-emerald-500
              transition-all
              rounded-full
              px-4
              py-2
              text-sm
              bg-emerald-100
              placeholder:text-zinc-400
            "
        />
    </form>
  )
}

export default SearchOrder
