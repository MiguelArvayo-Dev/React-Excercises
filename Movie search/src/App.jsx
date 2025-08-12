import "./App.css"
import { useMovies } from "./hooks/useMovies.jsx"
import { Movies } from "./componets/movieList"
import { useRef, useState, useEffect } from "react"

function useSearch() {
  const [search, updateSearch] = useState("")
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ""
      return
    }

    if (search === "") {
      setError("No se puede buscar una película vacía")
      return
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número")
      return
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres")
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  function handleSubmit(event) {
    event.preventDefault()
    getMovies({ search })
  }

  function handleChange(event) {
    updateSearch(event.target.value)
  }

  function handleSort() {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header className="search-top">
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, matrix, padrino..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button className="submit">buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
