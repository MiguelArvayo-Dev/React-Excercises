import "./instagram.css"
import { Link } from "react-router-dom"
import { paths } from "../constants/paths"

export function InstaLogo() {
  return (
    <div>
      <Link to={paths.instagram}>
        <button className="insta">
          <span className="instagramdot" />
        </button>
      </Link>
      <p>{`"Makes you want to snap a selfie"`}</p>
    </div>
  )
}
