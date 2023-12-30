import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

//Google Analytics
import ReactGA from 'react-ga4'
ReactGA.initialize('G-5PWBRCCWND')

ReactGA.send({
  hitType: "pageView",
  page: window.location.pathname
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
