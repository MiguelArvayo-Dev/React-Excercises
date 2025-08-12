import { EVENTS } from "./assets/const";

function navigate(href) {
  window.history.pushState([], "", href);

  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ to, target, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === EVENTS.MAINCLICK;
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.altKey;
    const isManagableEvent = target === undefined || target === "_self";

    if (isMainEvent && isModifiedEvent && !isManagableEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
