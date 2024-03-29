import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Logo from './components/Logo'
import SearchBox from './components/SearchBox'
import Navs from './components/Navs'
import Prompt from './components/Prompt'
import { useEffect, useState } from 'react'

function App() {
  const [prompt, setPrompt] = useState(null)

  function showPrompt(type, message) {
    setPrompt({ type, message })
  }

  return (
    <div className="App">
      <Prompt prompt={prompt} />
      <Router>
        <div className="navigation">
          <div className="navbar">
            <Logo />
            <SearchBox />
            <Navs />
          </div>
          <div className="small-screen-search">
            <SearchBox />
          </div>
          <div className="categories-container">
            <div className="categories">
              <CategoryLinkElement title="smartphones" icon="smartphone" />
              <CategoryLinkElement title="laptops" icon="laptop_mac" />
              <CategoryLinkElement title="smartwatches" icon="watch" />
              <CategoryLinkElement title="headphones" icon="headphones" />
              <CategoryLinkElement title="speakers" icon="speaker" />
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

function CategoryLinkElement({ title, icon }) {
  return (
    <NavLink to={`/${title}`}>
      <div className="category">
        <span className="material-symbols-outlined">{icon}</span>
        <p className="title">{title}</p>
      </div>
    </NavLink>
  )
}

export default App
