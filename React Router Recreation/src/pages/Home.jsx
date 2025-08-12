import { Link } from "../Link";

export function HomePage() {
  document.title = "Home Page";
  return (
    <>
      <h1>Home Page</h1>
      <p>This is an example page for a React Router from scratch </p>
      <Link to="/about">Go to 'About us</Link>
    </>
  );
}
