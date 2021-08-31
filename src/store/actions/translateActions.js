export const ACTION_TRANSLATE_ADD = '[translate] ADD'
export const ACTION_TRANSLATE_ADD_ERROR = '[translate] ADD_ERROR'
export const ACTION_TRANSLATE_FETCH = '[translate] FETCH'
export const ACTION_TRANSLATE_FETCH_SUCCESS = '[translate] FETCH_SUCCESS'
export const ACTION_TRANSLATE_FETCH_ERROR = '[translate] FETCH_ERROR'
export const ACTION_TRANSLATE_REMOVE = '[translate] REMOVE'
export const ACTION_TRANSLATE_REMOVE_ERROR = '[translate] REMOVE_ERROR'

export const translateAddAction = translate => ({
    type: ACTION_TRANSLATE_ADD,
    payload: translate
})

export const translateAddErrorAction = error => ({
    type: ACTION_TRANSLATE_ADD_ERROR,
    payload: error
})

export const translateFetchAction = user => ({
    type: ACTION_TRANSLATE_FETCH,
    payload: user
})

export const translateFetchSuccessAction = translations => ({
    type: ACTION_TRANSLATE_FETCH_SUCCESS,
    payload: translations
})

export const translateFetchErrorAction = error => ({
    type: ACTION_TRANSLATE_FETCH_ERROR,
    payload: error
})

export const translateRemoveAction = translate => ({
    type: ACTION_TRANSLATE_REMOVE,
    payload: translate
})

export const translateRemoveErrorAction = error => ({
    type: ACTION_TRANSLATE_REMOVE_ERROR,
    payload: error
})