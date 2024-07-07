export default function SearchBar({ mode = 'desktop' }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find what you need quickly and effortlessly..."
      />
      <button className="search-button">
        <span className="material-symbols-outlined d">search</span>
      </button>
    </div>
  )
}
