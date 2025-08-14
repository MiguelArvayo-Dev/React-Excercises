import { Link } from "../Link"

const profileSource =
  "https://media.licdn.com/dms/image/v2/D5603AQHWItKEF_7jlg/profile-displayphoto-crop_800_800/B56Zhd_dnfG4AI-/0/1753923575254?e=1758153600&v=beta&t=O60ptl1kziOBVyrQohMH2U0n0eKGDFwbgZ09tEkG9_o"

export default function AboutPage() {
  document.title = "About Page"
  return (
    <>
      <h1>About</h1>
      <div>
        <p>My name is Mike Arvayo and I'm creating a clone of react router </p>
        <img
          alt="profile pic"
          src={profileSource}
          width="250px"
          height="250px"
        ></img>
      </div>

      <Link to="/">Go Home</Link>
    </>
  )
}
