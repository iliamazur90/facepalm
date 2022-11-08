import s from "./Post.module.css";
import Avatar from "./../../../../img/fp_avatar.jpg";

const Post = (props) => {
  const post = props.posts.map(p => (
    <div key={p.id} className={s.Post}>
      <div className={s.postAvatar}>
        <img src={Avatar} alt={p.user} />
      </div>
      <div className={s.postText}>{p.text}</div>
    </div>
  ));

  return <>{post}</>;
}

export default Post;
