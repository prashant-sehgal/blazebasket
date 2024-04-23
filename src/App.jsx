import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Results from './pages/Results'
import Product from './pages/Product'
import User from './pages/User'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
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
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
