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

function App() {
  const [loginInfo, setLoginInfo] = useState({ isLogedIn: false })
  const [prompt, setPrompt] = useState({
    type: 'error',
    message: 'something',
  })

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
        <Prompt prompt={prompt} onClose={() => setPrompt(undefined)} />
      ) : (
        ''
      )}
      <Router>
        <Navbar loginInfo={loginInfo} />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home loginInfo={loginInfo} />} />
            <Route path="/login" element={<Login setLogin={setLoginJWT} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<User />} />
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
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
