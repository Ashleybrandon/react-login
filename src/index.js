import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

//Google Analytics
import ReactGA from 'react-ga4'
ReactGA.initialize("G-5PKG573GLN")

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "test"
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
