import { useState, useEffect } from "react";

function App() {
  const [enabled, setEnable] = useState(false);
  const [mouseLocation, setMouseLocation] = useState({ mouseX: 0, mouseY: 0 });

  const mouseHighlight = {
    position: "absolute",
    backgroundColor: "#09f",
    borderRadius: "50%",
    opacity: 0.8,
    pointerEvents: "none",
    left: -20,
    top: -20,
    width: 40,
    height: 40,
    transform: `translate(${mouseLocation.mouseX}px, ${mouseLocation.mouseY}px)`,
  };

  useEffect(() => {
    console.log("mouse follow active: ");

    const handlePostion = (event) => {
      const { x, y } = event;
      setMouseLocation({ mouseX: x, mouseY: y });
    };

    if (enabled) {
      window.addEventListener("pointermove", handlePostion);
    }

    return () => {
      window.removeEventListener("pointermove", handlePostion);
    };
  }, [enabled]);

  return (
    <main>
      <div style={enabled ? mouseHighlight : null}></div>
      <button onClick={() => setEnable(!enabled)}>
        {enabled ? "deactivate mouse follow" : "activate mouse follow"}
      </button>
    </main>
  );
}

export default App;
