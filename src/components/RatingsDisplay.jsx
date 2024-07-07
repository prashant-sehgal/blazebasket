export default function RatingsDisplay({
  ratings = 3,
  color = '#16427c',
  averageRatings = 3.5,
}) {
  return (
    <div className="ratings-display" style={{ color: color }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          className={`material-symbols-outlined ${
            value <= ratings ? 'material-symbols-outlined-fill' : ''
          }`}
          key={value}
          style={{ color }}
        >
          star
        </span>
      ))}
      ({averageRatings})
    </div>
  )
}
