const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  posts: [
    {
      id: 1,
      user: "Me",
      avatar: "../../App/img/fp_avatar.jpg",
      text: "HelloWorld",
      date: "09-09-2022 21:00",
    },
    {
      id: 2,
      user: "Me",
      avatar: "../img/fp_avatar.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente!",
      date: "09-09-2022 21:00",
    },
    {
      id: 3,
      user: "Me",
      avatar: "../img/fp_avatar.jpg",
      text: "Necessitatibus totam nesciunt magnam quas accusantium at nam harum soluta ullam quia.",
      date: "09-09-2022 21:00",
    },
    {
      id: 4,
      user: "Me",
      avatar: "../img/fp_avatar.jpg",
      text: "Quis quisquam magni nulla!",
      date: "09-09-2022 21:00",
    },
    {
      id: 5,
      user: "Me",
      avatar: "../img/fp_avatar.jpg",
      text: "Thinking... Please wait",
      date: "09-09-2022 21:00",
    },
  ],
  newPostText: "",
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.currentText,
      };
    case ADD_POST:
      let text = state.newPostText;
      let id = state.posts.length + 1;
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: id,
            user: "Me",
            avatar: "../../App/img/fp_avatar.jpg",
            text: text,
            date: "01-01-2022 00:00",
          },
        ],
      };
    default:
      return state;
  }
};

export const updatePostTextAC = currentText => ({
  type: UPDATE_POST_TEXT,
  currentText: currentText,
});
export const addPostAC = () => ({ type: ADD_POST });

export default feedReducer;
