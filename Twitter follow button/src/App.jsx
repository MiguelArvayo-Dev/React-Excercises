import { useState } from "react";
import "./App.css";
import { TwitterCard } from "./TwitterFollowCard.jsx";
import "./index.css";

export function App() {
  const usersList = [
    { userName: "gorillaz", nombre: "Miguel Lopez" },
    { userName: "Mike", nombre: "Ramoncito" },
    { userName: "george", nombre: "Jorge" },
    { userName: "daisy", nombre: "pancho" },
  ];
  return (
    <section className="App">
      {usersList.map((user) => {
        const { userName, nombre } = user;

        return (
          <TwitterCard userName={userName} key={nombre}>
            {nombre}
          </TwitterCard>
        );
      })}
    </section>
  );
}

/*
gorillaz
Miguel Lopez
{`https://unavatar.io/${userName}`}

*/
