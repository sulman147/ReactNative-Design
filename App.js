import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import MyTabs from "./Navigator/TabNavigator";

const initialState = {
  action: "",
  name: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <MyTabs />
  </Provider>
);

export default App;
