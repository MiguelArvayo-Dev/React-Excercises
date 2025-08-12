import { useEffect, useState } from "react";
import { getRandomFact } from "../Services";

export function useCatFact() {
  const [fact, setFact] = useState(null);

  function refreshFact() {
    getRandomFact().then((newFact) => setFact(newFact));
  }

  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
