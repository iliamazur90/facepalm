import { combineReducers, createStore } from 'redux';
import profileReducer from "./profile-reducer";
import friendsReducer from './friends-reducer';

let reducers = combineReducers({    
    profile: profileReducer,
    friends: friendsReducer,
})
let store = createStore(reducers);

export default store;