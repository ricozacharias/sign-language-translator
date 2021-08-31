export const ACTION_LOGIN_ATTEMPT = '[login] ATTEMPT'
export const ACTION_LOGIN_SUCCESS = '[login] SUCCESS'
export const ACTION_LOGIN_ERROR = '[login] ERROR'

export const loginAttemptAction = credentials => ({
    type: ACTION_LOGIN_ATTEMPT,
    payload: credentials
})

export const loginSuccessAction = profile => ({
    type: ACTION_LOGIN_SUCCESS,
    payload: profile
})

export const loginErrorAction = error => ({
    type: ACTION_LOGIN_ERROR,
    payload: error
})