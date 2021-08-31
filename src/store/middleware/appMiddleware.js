import { ACTION_SESSION_EXPIRED, sessionLogoutAction } from "../actions/sessionActions"

export const appMiddleware = ({ dispatch }) => next => action => {

    next(action)

    if (action.type === ACTION_SESSION_EXPIRED) {
        dispatch(sessionLogoutAction());
    }
}