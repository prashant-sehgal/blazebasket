export default function Filter({ title, icon }) {
  return (
    <a href={`/${title}`}>
      <div className="filter">
        <span className="material-symbols-outlined">{icon}</span>
        <p className="title">{title}</p>
      </div>
    </a>
  )
}
