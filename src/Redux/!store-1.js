const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'

let store = {
  _state: {
    feed: {
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
      newPostText: '',
    },
  },
  _callSubscriber() {/* this func getting "observer" */},
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  updatePostText(currentText) {
    this._state.feed.newPostText = currentText
    this._callSubscriber(this._state)
  },
  addPost() {
    const newPost = {
      id: this._state.feed.length + 1,
      user: "Me",
      avatar: "../../App/img/fp_avatar.jpg",
      text: this._state.feed.newPostText,
      date: "01-01-2022 00:00",
    };
    this._state.feed.posts.push(newPost)
    this._callSubscriber(this._state)
  },
};

export default store;
