import { Link } from "../Link";

const profileSource =
  "https://pbs.twimg.com/profile_images/557661511200428032/IILng_1G_400x400.jpeg";

export default function AboutPage() {
  document.title = "About Page";
  return (
    <>
      <h1>About</h1>
      <div>
        <p>My name is Mike Arvayo and I'm creating a clone of react router </p>
        <img alt="profile pic" src={profileSource}></img>
      </div>

      <Link to="/">Go Home</Link>
    </>
  );
}
