import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.ProfileInfo}>
            <div>
                <img src={props.profile.photos.large} alt="Profile" />
            </div>
        </div>
    )
}

export default ProfileInfo;