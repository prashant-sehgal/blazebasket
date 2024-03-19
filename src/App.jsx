import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Logo from './components/Logo'
import SearchBox from './components/SearchBox'
import Navs from './components/Navs'

function App() {
  return (
    <div className="App">
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
