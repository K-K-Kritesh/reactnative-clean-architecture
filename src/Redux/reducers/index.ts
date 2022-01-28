import { combineReducers } from "redux";
import appScreenLoader from "./appScreenLoader.reducers";
import user from "./user.reducers";

export default combineReducers({
    appScreenLoader,
    user
});