import React from 'react'

export default function SearchBox() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search for any brand or product" />
      <button>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  )
}
