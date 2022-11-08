import './Header.css';
import logo from '../../img/facepalm.jpg'

function Header() {
  console.log(logo)
  return (
    <header className="Header">
      <img src={logo} alt="Logo" />
      <div className='Header-text'>
        facepalm
      </div>
    </header>
  )
}

export default Header;