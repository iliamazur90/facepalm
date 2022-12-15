import s from './Friend.module.css';
import Avatar from './../../../../img/fp_avatar.jpg';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../../../api/api';

const Friend = props => {
  return (
    <>
      {props.users.map(u => (
        <div key={u.id} className={s.Friend}>
          <div className={s.statusButton}>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    followAPI.follow.post(u.id).then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <NavLink to={`../profile/${u.id}`}>
            <div className={s.friendAvatar}>
              <img
                src={u.photos.large ? u.photos.large : Avatar}
                alt={u.name}
              />
            </div>
          </NavLink>
          <NavLink to={`../profile/${u.id}`}>
            <div className={s.friendName}>{u.name}</div>
          </NavLink>
          
        </div>
      ))}
    </>
  );
};

export default Friend;
