import "./youtube.css"
import { Link } from "react-router-dom"
import { paths } from "../constants/paths"

export function YoutubeLogo() {
  return (
    <div>
      <Link to={paths.youtube}>
        <button className="youtubespace">
          <span className="youtube" />
        </button>
      </Link>
      <p>"That red screams: hit play!"</p>
    </div>
  )
}
