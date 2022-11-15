import s from './ProfileInfo.module.css';
import Avatar from './../../../../img/fp_avatar.jpg';
import Preloader from '../../../common/Preloader/Preloader';

const ProfileInfo = props => {
  const profile = props.profile;
  console.log(profile);
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.ProfileInfo}>
      <div className={s.photo}>
        <img
          src={profile.photos.large ? profile.photos.large : Avatar}
          alt="Profile"
        />
      </div>
      <div className={s.details}>
        <div className={s.fullName}>{profile.fullName}</div>
        <div className={s.aboutMe}>{profile.aboutMe}</div>
      </div>
      <div className={s.posts}>
        Has no posts!
      </div>
    </div>
  );
};

export default ProfileInfo;
