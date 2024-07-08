import { useState } from 'react'

export default function SearchBar() {
  const [search, setSearch] = useState('')

  async function onSubmitSearchForm(event) {
    event.preventDefault()
    window.location.href = `/search/${search}`
  }

  return (
    // <div className="search-bar">
    <form className="search-bar" onSubmit={onSubmitSearchForm}>
      <input
        type="text"
        placeholder="Find what you need quickly and effortlessly..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        required
      />
      <button className="search-button" type="submit">
        <span className="material-symbols-outlined d">search</span>
      </button>
    </form>
    // </div>
  )
}
