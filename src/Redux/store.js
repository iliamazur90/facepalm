import { applyMiddleware, combineReducers, createStore } from 'redux';
import profilesReducer from './profiles-reducer';
import friendsReducer from './friends-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profiles: profilesReducer,
  friends: friendsReducer,
  auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
