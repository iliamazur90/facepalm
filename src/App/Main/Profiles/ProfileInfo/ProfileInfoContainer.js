import React from 'react';
import {
  setUserProfile,
  typingPost,
  addPost,
} from '../../../../Redux/profiles-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';

class ProfilesContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleFetching(true);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(response => {
        this.props.setUserProfile(response.data);
        // this.props.toggleFetching(false);
      });
  }

  render() {
    return <ProfileInfo {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profiles.profile,
    isFetching: state.profiles.isFetching,
  };
};

export default connect(mapStateToProps, {
  setUserProfile,
  typingPost,
  addPost,
})(ProfilesContainer);
