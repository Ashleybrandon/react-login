import { useState } from 'react'
import { Login, Logout, Nav, Home, About, News } from './Components'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'
//Styles
import './App.css'
//Google Analytics
import ReactGA from 'react-ga4'

ReactGA.initialize("G-5PKG573GLN")

// Send initial page load to Google Analytics
ReactGA.send({ hitType: 'pageview', page: window.location.pathname })

const history = createBrowserHistory()

history.listen(location => {
  ReactGA.send({
    hitType: "pageview",
    page: location.pathname,
  })
})

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

  return (
    <div>
      <Router history={history}>
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


