import React from 'react';
import { typingPost, addPost } from '../../../../Redux/profiles-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

class MyPostsContainer extends React.Component {
  render() {
    return <MyPosts {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.profiles.posts,
    newPostText: state.profiles.newPostText,
    isFetching: state.profiles.isFetching,
  };
};

export default connect(mapStateToProps, {
  typingPost,
  addPost,
})(MyPostsContainer);
