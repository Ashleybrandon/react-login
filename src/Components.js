import { NavLink } from 'react-router-dom'

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
    return (
        <div>Home</div>
    )
}

export const About = () => {
    return (
        <div>About</div>
    )
}

export const News = () => {
    return (
        <div>News</div>
    )
}