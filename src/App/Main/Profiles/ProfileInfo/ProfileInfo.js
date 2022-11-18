import s from './ProfileInfo.module.css';
import Avatar from './../../../../img/fp_avatar.jpg';
import Preloader from '../../../common/Preloader/Preloader';

const ProfileInfo = props => {
  const profile = props.profile;
    
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.ProfileInfo}>
      <div className={s.profileInfoContainer}>
        <div className={s.avatar}>
          <img
            src={profile.photos.large ? profile.photos.large : Avatar}
            alt="Profile"
          />
        </div>
        <div className={s.detailsContainer}>
          <div className={s.fullName}>{profile.fullName}</div>
          <div className={s.aboutMe}>{profile.aboutMe}</div>
        </div>
      </div>
      <div className={s.posts}>There are no posts yet!</div>
    </div>
  );
};

export default ProfileInfo;
