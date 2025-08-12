import { React } from "react"
import "./App.css"
import { useCatImage } from "./services/Hooks/useCatImage"
import { useCatFact } from "./services/Hooks/useCatFact"

export function App() {
  const { fact, refreshFact } = useCatFact()

  const imageUrl = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <button onClick={handleClick}>New Fact </button>
      <h1>Cats fun facts</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="picture from CAT_IMAGE_URL" />}
    </main>
  )
}
