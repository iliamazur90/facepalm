import s from "./Main.module.css";
import Messages from "./Messages/Messages";
import Settings from "./Settings/Settings";

import { Routes, Route } from "react-router-dom";
import FeedContainer from "./Feed/FeedContainer";
import FriendsContainer from "./Friends/FriendsContainer";

function Main(props) {
  return (
    <div className={s.Main}>
      <Routes>
        <Route path='/' element={<FeedContainer store={props.store} />} />
        <Route path='/friends' element={<FriendsContainer />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Main;
