import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App/App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const rerenderEntireTree = () => {
  root.render(
    // <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    // </React.StrictMode>
  );
// };

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });
