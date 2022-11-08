import { combineReducers, createStore } from 'redux';
import feedReducer from "./feed-reducer";
import friendsReducer from './friends-reducer';

let reducers = combineReducers({    
    feed: feedReducer,
    friends: friendsReducer,
})
let store = createStore(reducers);

export default store;