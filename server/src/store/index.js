import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "../containers/Home/store";

const reducer = combineReducers({
  home: homeReducer,
});

export const getStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
};

export const createClientStore = () => {
  const initState = window.context.state;
  const store = createStore(reducer, initState, applyMiddleware(thunk));
  return store;
};

