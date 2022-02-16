import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import MainReducer from "./main-reducer";

let reducers = combineReducers({ main: MainReducer });
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
