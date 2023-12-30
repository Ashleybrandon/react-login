import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ReactGA from 'react-ga'

export const Nav = () => {
    return (
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
        </ul>
    )
}

export const Login = ({onLogin}) => {
    return (
        <div>
            <button onClick={onLogin}>Log In</button>
        </div>
    )
}

export const Logout = ({onLogout}) => {
    return (
        <div className='mt-4'>
            <button onClick={onLogout}>Log Out</button>
        </div>
    )
}

export const Home = () => {
    //Send page view to GA
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
        }, [])

    return (
        <div>Home</div>
    )
}

export const About = () => {
    //Send page view to GA
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
        }, [])

    return (
        <div>About</div>
    )
}

export const News = () => {
    //Send page view to GA
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
        }, [])

    return (
        <div>News</div>
    )
}