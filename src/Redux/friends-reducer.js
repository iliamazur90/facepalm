const FOLLOW = "FOLLOW ";
const UNFOLLOW = "UNFOLLOW ";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_FETCHING = "TOGGLE-FETCHING";

let initialState = {
  users: [  
  /*
  {
    id: 1,
    name: "Diana",
    photos: {
        "small": "../img/fp_avatar.jpg",,
        "large": "../img/fp_avatar.jpg",
      },
    status: null,
    followed: true,
  },
  {
    id: 2,
    name: "Tarik",
    photos: {
        "small": "../img/fp_avatar.jpg",,
        "large": "../img/fp_avatar.jpg",
      },
    status: null,
    followed: false,
  },
  {
    id: 3,
    name: "Mom",
    photos: {
        "small": "../img/fp_avatar.jpg",,
        "large": "../img/fp_avatar.jpg",
      },
    status: null,
    followed: true,
  },
  {
    id: 4,
    name: "Viktor",
    photos: {
        "small": "../img/fp_avatar.jpg",,
        "large": "../img/fp_avatar.jpg",
      },
    status: null,
    followed: true,
  },
  {
    id: 5,
    name: "Zhvan",
    photos: {
        "small": "../img/fp_avatar.jpg",,
        "large": "../img/fp_avatar.jpg",
      },
    status: null,
    followed: false,
  },
  */
  ],
  pageSize: 13,
  totalUsers: null,
  currentPage: 1,
  isFetching: false,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
      case TOGGLE_FETCHING: 
        return {
          ...state,
          isFetching: action.isFetching,
        }
      case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.totalCount,
      };
      case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export const follow = userID => ({ type: FOLLOW, userID });
export const unfollow = userID => ({ type: UNFOLLOW, userID });
export const setUsers = users => ({ type: SET_USERS, users });
export const setTotalUsers = totalCount => ({ type: SET_TOTAL_USERS, totalCount });
export const setCurrentPage  = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching });

export default friendsReducer;
