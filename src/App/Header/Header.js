import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../img/facepalm.jpg';
import Preloader from '../common/Preloader/Preloader';

const Header = props => {
  const showLogin = () => {
    if (props.isFetching) {
      return <Preloader />
    } else if (!props.isFetching && props.isAuth) {
      return props.login
    } else if (!props.isFetching && !props.isAuth) {
      return <NavLink to="auth">Log in</NavLink>
    }
  }
  
  return (
    <header className={s.Header}>
      <div className={s.HeaderTitle}>
        <div className={s.HeaderImg}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={s.HeaderText}>facepalm</div>
      </div>
      <div className={s.login}>
        {showLogin()}
      </div>
    </header>
  );
};

export default Header;
