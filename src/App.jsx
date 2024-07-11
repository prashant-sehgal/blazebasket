import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Results from './pages/Results'
import Product from './pages/Product'
import User from './pages/User'
import { getUserData } from './API'
import Prompt from './components/Promp'
import Orders from './pages/Orders'

function App() {
  const [loginInfo, setLoginInfo] = useState({ isLogedIn: false })
  const [cart, setCart] = useState(loadCart())
  const [prompt, setPrompt] = useState()

  function loadCart() {
    const cartJSONString = localStorage.cart
    if (!cartJSONString) return []

    const cart = JSON.parse(cartJSONString)
    return cart
  }

  function updateCart(newCart) {
    setCart((current) => {
      localStorage.setItem('cart', JSON.stringify([...newCart]))
      return [...newCart]
    })
  }

  function addItemToCart(item) {
    if (cart.length === 5) return
    setCart((current) => {
      localStorage.setItem('cart', JSON.stringify([...current, item]))
      return [...current, item]
    })
    window.location.href = '/cart'
  }

  function showPrompt(type, message) {
    setPrompt({ type, message })
  }

  async function loadUserFromJWT() {
    const token = document.cookie.split('=')
    if (token[0] !== 'jwt') return

    const uid = jwtDecode(token[1]).id

    if (!uid) return

    const user = await getUserData(uid)
    if (!user._id) return

    setLoginInfo({
      isLogedIn: true,
      user,
      jwt: token[1],
    })
  }

  useEffect(function () {
    loadUserFromJWT()
  }, [])

  function setLoginJWT(data) {
    document.cookie = `jwt=${data[0]}; expires=${new Date(
      data[1] * 1
    ).toUTCString()}; path=/`

    window.location.href = '/'
  }

  return (
    <div className="App">
      {prompt ? (
        <Prompt prompt={prompt} close={() => setPrompt(undefined)} />
      ) : (
        ''
      )}
      <Router>
        <Navbar loginInfo={loginInfo} cartLength={cart.length} />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home loginInfo={loginInfo} />} />
            <Route path="/login" element={<Login setLogin={setLoginJWT} />} />
            <Route
              path="/signup"
              element={
                <Signup shopPrompt={showPrompt} setLogin={setLoginJWT} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  updateCart={updateCart}
                  loginInfo={loginInfo}
                />
              }
            />
            <Route path="/user" element={<User loginInfo={loginInfo} />} />
            <Route
              path="/smartphones"
              element={<Results category="smartphones" />}
            />
            <Route path="/laptops" element={<Results category="laptops" />} />
            <Route
              path="/smartwatches"
              element={<Results category="smartwatches" />}
            />
            <Route
              path="/headphones"
              element={<Results category="headphones" />}
            />
            <Route path="/speakers" element={<Results category="speakers" />} />
            <Route
              path="/search/:query"
              element={<Results category="search" />}
            />
            <Route
              path="/product"
              element={
                <Product loginInfo={loginInfo} addItemToCart={addItemToCart} />
              }
            />
            <Route path="/orders" element={<Orders loginInfo={loginInfo} />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
