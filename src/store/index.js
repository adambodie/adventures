import { createStore } from "redux";

import combineReducer from "./reducers/index";

const store = createStore(combineReducer);
export default store;
