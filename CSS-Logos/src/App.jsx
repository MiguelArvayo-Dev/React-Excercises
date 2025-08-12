import { Routes, Route, NavLink } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./assets/AboutPage"
import {
  EditableInstagram,
  EditableTiktok,
  EditableReact,
  EditableWindows,
  EditableYoutube,
  EditableGoogle,
} from "./CCC-demos/editableDemos"
import { paths } from "./constants/paths"

function checkIfActive({ isActive }) {
  return isActive ? "is-active" : undefined
}

function App() {
  return (
    <div>
      <div className="pages">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={checkIfActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-page" className={checkIfActive}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path={paths.instagram} element={<EditableInstagram />} />
        <Route path={paths.react} element={<EditableReact />} />
        <Route path={paths.tiktok} element={<EditableTiktok />} />
        <Route path={paths.windows} element={<EditableWindows />} />
        <Route path={paths.youtube} element={<EditableYoutube />} />
        <Route path={paths.google} element={<EditableGoogle />} />
      </Routes>
    </div>
  )
}

export default App
