import "./google.css"
import { Link } from "react-router-dom"
import { paths } from "../constants/paths"

export function GoogleLogo() {
  return (
    <div>
      <Link to={paths.google}>
        <button className="google"></button>
      </Link>
      <p>"Searching for something?"</p>
    </div>
  )
}
