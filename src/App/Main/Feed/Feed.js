import React from "react";
import s from "./Feed.module.css";
import Post from "./Post/Post";
import Avatar from "./../../../img/fp_avatar.jpg";

const Feed = props => {

  const changingPost = e => {
    const text = e.target.value
    props.typingPost(text)
  };

  const addingPost = () => {
    props.addPost()
  };

  return (
    <div className={s.Feed}>
      <h2>Feed</h2>
      <div className={s.addPostArea}>
        <div className={s.addPostAvatar}>
          <img src={Avatar} alt='Your Avatar' />
        </div>
        <div className={s.addPostTextArea}>
          <textarea
            onChange={changingPost}
            value={props.newPostText}
            placeholder='type your text...'
          >
          </textarea>
        </div>
        <div className={s.addPostButtonArea}>
          <button onClick={addingPost}>Add post</button>
        </div>
      </div>
      <Post posts={props.posts} />
    </div>
  );
};

export default Feed;
