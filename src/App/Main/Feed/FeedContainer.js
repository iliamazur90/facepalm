import { addPostAC, updatePostTextAC } from "../../../Redux/feed-reducer";
import Feed from "./Feed";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    posts: state.feed.posts,
    newPostText: state.feed.newPostText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    typingPost: currentText => {
      dispatch(updatePostTextAC(currentText));
    },
    addPost: () => {
      dispatch(addPostAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
