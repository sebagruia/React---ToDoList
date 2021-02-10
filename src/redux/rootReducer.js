import {combineReducers} from "redux"

import {userReducer} from "../redux/user/userReducer";

const rootReduer = combineReducers({userReducer});

export default rootReduer;