import { Link } from "../Link";

export function Search({ routeParams }) {
  document.title = "Search Engine";
  return (
    <>
      <h1>You search for: {routeParams.query}</h1>
      <Link to="/">Go 'home'</Link>
    </>
  );
}
