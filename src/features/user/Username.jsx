import { useSelector } from "react-redux"

function Username() {
  const username = useSelector(state => state.user.username) 

  if (!username) return null

  return (
    <div className="hidden sm:block font-sm font-semibold lowercase">{username}</div>
  )
}

export default  Username
