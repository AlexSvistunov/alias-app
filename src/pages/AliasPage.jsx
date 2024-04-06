import { Link } from "react-router-dom"
import Teams from "../components/Teams/Teams"
import { ROUTES } from "../routes"


const AliasPage = () => {
  return (
    <div>
      <Teams/>

      <Link to={ROUTES.score}>Продолжить</Link>
    </div>
  )
}

export default AliasPage