import "./windows.css"
import { Link } from "react-router-dom"
import { paths } from "../constants/paths"

export function WindowsLogo() {
  return (
    <div>
      <Link to={paths.windows}>
        <button className="split-image-container">
          <div className="quadrant quadrant-1"></div>
          <div className="quadrant quadrant-2"></div>
          <div className="quadrant quadrant-3"></div>
          <div className="quadrant quadrant-4"></div>
        </button>
      </Link>
      <p>{`"Hover to reveal the logo"`}</p>
    </div>
  )
}
