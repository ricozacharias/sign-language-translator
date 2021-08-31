import { combineReducers } from "redux";
import { ACTION_SESSION_CLEAR } from "../actions/sessionActions";
import { loginReducer } from "./loginReducer";
import { sessionReducer } from "./sessionReducer";
import { translateReducer } from "./translateReducer";

const appReducer = combineReducers({
    login: loginReducer,
    session: sessionReducer,
    translate: translateReducer
})

const rootReducer = (state, action) => {
    if (action.type === ACTION_SESSION_CLEAR) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer