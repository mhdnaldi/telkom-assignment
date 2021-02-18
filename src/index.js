import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/reducer";
import thunk from "redux-thunk";

const composeEnhancer =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
