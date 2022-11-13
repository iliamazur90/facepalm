import { typingPost, addPost } from '../../../Redux/profile-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';

class ProfileContainer extends React.Component {
  render() {
    return;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  };
};

export default connect(mapStateToProps, { typingPost, addPost })(Profile);
