import s from "./Friend.module.css";
import Avatar from "./../../../../img/fp_avatar.jpg";
import { NavLink } from "react-router-dom"

const Friend = props => {
  return (
    <>
      {props.users.map(u => (
        <div key={u.id} className={s.Friend}>
          <NavLink to={`../profile/${u.id}`}>
          <div className={s.friendAvatar}>
            <img src={u.photos.large ? u.photos.large : Avatar} alt={u.name} />
          </div>
          </NavLink>
          <NavLink to={`../profile/${u.id}`}>
          <div className={s.friendName}>{u.name}</div>
          </NavLink>
          <div className={s.statusButton}>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
