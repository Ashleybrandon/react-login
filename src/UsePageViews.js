import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export const UsePageViews = () => {
  let location = useLocation()

  useEffect(() => {

    const pageTitle = location.pathname === '/home' ? 'Home' :
                      location.pathname === '/about' ? 'About' :
                      location.pathname === '/news' ? 'News' : 'React App'
    
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: pageTitle
    })  
  }, [location])
}
