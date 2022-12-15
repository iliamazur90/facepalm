const SET_USER_DATA = "SET-USER-DATA";
const TOGGLE_FETCHING = "TOGGLE-FETCHING";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
      case TOGGLE_FETCHING: 
        return {
          ...state,
          isFetching: action.isFetching,
        }
    default:
      return state;
  }
};

export const setUserData = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email}});
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching});
export default authReducer;
