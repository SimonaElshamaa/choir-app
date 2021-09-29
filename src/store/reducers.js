import { combineReducers } from "redux";

// Authentication
import users from "./users/reducer";
import groups from "./groups/reducer";
import attendances from "./attendances/reducer";

const rootReducer = combineReducers({ users, groups, attendances });

export default rootReducer;
