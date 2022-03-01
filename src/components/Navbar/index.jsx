import { Link } from 'react-router-dom'
// import logo from '../logo.svg';
import './index.css'

const Navbar = () => {
   return (
      <nav className="navbar">
         <Link to="/">
            <img src="/logoCocktail.jpg" className="logo-bb" alt="" />
            <span>BB-bidas</span>
         </Link>

         <ul className="nav-links">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar
