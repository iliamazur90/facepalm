import s from "./Friend.module.css";
import Avatar from "./../../../../img/fp_avatar.jpg";

const Friend = props => {
  return (
    <>
      {props.users.map(f => (
        <div key={f.id} className={s.Friend}>
          <div className={s.friendAvatar}>
            <img src={f.photos.large ? f.photos.large : Avatar} alt={f.name} />
          </div>
          <div className={s.friendName}>{f.name}</div>
          <div className={s.statusButton}>
            <div>
              {f.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(f.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(f.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Friend;
