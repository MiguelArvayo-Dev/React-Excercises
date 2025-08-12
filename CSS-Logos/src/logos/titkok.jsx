import "./tiktok.css"
import { Link } from "react-router-dom"
import { paths } from "../constants/paths"

export function TiktokLogo() {
  return (
    <div>
      <Link to={paths.tiktok}>
        <button className="tiktokbackground">
          <span className="tiktok" />
        </button>
      </Link>
      <p>{`"Look at that anaglyph effect" `}</p>
    </div>
  )
}
