import { combineReducers, createStore } from 'redux';
import profilesReducer from './profiles-reducer';
import friendsReducer from './friends-reducer';

let reducers = combineReducers({
  profiles: profilesReducer,
  friends: friendsReducer,
});
let store = createStore(reducers);

export default store;
