import { useState } from 'react'
import { Login, Logout, Nav, Home, About, News } from './Components'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { UsePageViews } from './UsePageViews'
//Styles
import './App.css'
//Google Analytics
import ReactGA from 'react-ga4'

ReactGA.initialize("G-5PKG573GLN")

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem('BasicLoginAuth') || false)
  )

 const handleLogin = () => {
  setIsLoggedIn(true)
  localStorage.setItem('BasicLoginAuth', true)
 }

 const handleLogout = () => {
  setIsLoggedIn(false)
  localStorage.removeItem('BasicLoginAuth')
 }

 UsePageViews()

  return (
    <div>
      <Router>
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Nav />
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
            </Routes>
            <Logout onLogout={handleLogout} />
          </>
        )}
      </Router>
    </div>
  )
}

export default App


