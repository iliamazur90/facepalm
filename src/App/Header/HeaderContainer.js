import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserData, toggleFetching } from '../../Redux/auth-reducer';
import axios from 'axios';
import Header from './Header';

const HeaderContainer = props => {
  useEffect(() => {
    props.toggleFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          props.setUserData(id, login, email);
        }
        props.toggleFetching(false);
      });
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = state => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, { setUserData, toggleFetching })(
  HeaderContainer,
);
