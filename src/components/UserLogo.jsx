export default function UserLogo({ img, style }) {
  const defaultImg =
    'https://cdn3.iconfinder.com/data/icons/login-4/512/LOGIN-10-512.png'
  return (
    <div className="user-logo" style={style}>
      <img src={img ? img : defaultImg} />
    </div>
  )
}
