import './Navbar.css';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='Navbar'>
      <ul>
        <li>
          <NavLink className='Navbar-link' to='/'>
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink className='Navbar-link' to='/friends'>
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink className='Navbar-link' to='/messages'>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink className='Navbar-link' to='/settings'>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;