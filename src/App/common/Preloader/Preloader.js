import s from "./Preloader.module.css";
import preloaderPic from "../../../img/preloaders/Quarter-Circle-Loading.svg";

const Preloader = props => {
  return (
    <div className={s.Preloader}>
      <img src={preloaderPic} alt='Loading...' />
    </div>
  );
};

export default Preloader;
