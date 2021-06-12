import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="nav-center">
            <Link to="/">
               Bebebidas
            </Link>
         </div>
         <ul className="nav-links">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
