import { ACTION_TRANSLATE_ADD, 
         ACTION_TRANSLATE_ADD_ERROR, 
         ACTION_TRANSLATE_FETCH,
         ACTION_TRANSLATE_FETCH_SUCCESS,
         ACTION_TRANSLATE_FETCH_ERROR,
         ACTION_TRANSLATE_REMOVE,
         ACTION_TRANSLATE_REMOVE_ERROR } from "../actions/translateActions";
         
const initialState = {
    translateError: '',
    translations: []
}

export const translateReducer = (state = { ...initialState }, action) => {
   
    switch (action.type) {
        case ACTION_TRANSLATE_ADD:
            return {
                ...state,
                translateError: ''
            }
        case ACTION_TRANSLATE_ADD_ERROR:
            return {
                ...state,
                translateError: action.payload
            }
        case ACTION_TRANSLATE_FETCH:
            return {
                ...state,
                translateError: ''
            }            
        case ACTION_TRANSLATE_FETCH_SUCCESS:
            return {
                ...state,
                translateError: '',
                translations: [...action.payload]
            }             
        case ACTION_TRANSLATE_FETCH_ERROR:
            return {
                ...state,
                translateError: action.payload
            }
        case ACTION_TRANSLATE_REMOVE:
            return {
                ...state,
                translateError: ''
            }
        case ACTION_TRANSLATE_REMOVE_ERROR:
            return {
                ...state,
                translateError: action.payload
            }            
        default:
            return state
    }
}