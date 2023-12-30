import { useState } from 'react'
import { Login, Logout, Nav, Home, About, News } from './Components'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
//Styles
import './App.css'


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
    </div>
  )
}

export default App


