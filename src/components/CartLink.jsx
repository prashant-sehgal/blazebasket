import { NavLink } from 'react-router-dom'

export default function CartLink({ amount = 5 }) {
  return (
    <NavLink to="/cart">
      <div className="cart-icon">
        <p className="value">{amount}</p>
        <span className="material-symbols-outlined d">shopping_cart</span>
      </div>
    </NavLink>
  )
}
