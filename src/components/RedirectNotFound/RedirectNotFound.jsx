import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../routes"
import { useEffect } from "react"

const RedirectNotFound = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate(ROUTES.teams)
  })

  return null
}

export default RedirectNotFound