import { useEffect, useState, Children } from "react";
import { EVENTS } from "./assets/const";
import { match } from "path-to-regexp";

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponet = () => (
    <>
      <h2>Error 404</h2>
    </>
  ),
}) {
  const [currentPath, setCurrentPatch] = useState(window.location.pathname);

  const routesFromChildren = Children.map(children, ({ type, props }) => {
    const { name } = type;
    const isChildren = name === "Route";

    return isChildren ? props : null;
  });

  const rutesToUse = routes.concat(routesFromChildren);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPatch(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const Page = rutesToUse.find(({ path }) => {
    if (path === currentPath) return true;
    const matcherUrl = match(path, { decode: decodeURIComponent });

    const matched = matcherUrl(currentPath);
    if (!matched) return false;
    routeParams = matched.params;

    return true;
  })?.component;

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponet />;
}
