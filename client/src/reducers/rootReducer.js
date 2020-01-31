import { combineReducers } from "redux";
import logReducer from "./logReducer";

// !! First paramater here refers to the 'name' of the state, the second part refers to the reducer.
// "log" in this case can be anything at this point, reducer must refer to appropriate reducer

export default combineReducers({ log: logReducer });
