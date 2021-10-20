import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import appReducer from "./Reducer";

const rootReducer = combineReducers({ appReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
