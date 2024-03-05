import { useSelector } from "react-redux"
import { getUsername } from "./userSlice"

function Username() {
  const username = useSelector(getUsername) 

  if (!username) return null

  return (
    <div className="hidden sm:block font-sm font-semibold lowercase">{username}</div>
  )
}

export default  Username
