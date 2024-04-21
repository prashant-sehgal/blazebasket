export default function QuantityEditor({
  value,
  setValue,
  style,
  fontSize = 20,
}) {
  return (
    <div className="quantity-editor" style={style}>
      <button onClick={() => setValue(value - 1)}>-</button>
      <p className="value" style={{ fontSize }}>
        {value}
      </p>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  )
}
