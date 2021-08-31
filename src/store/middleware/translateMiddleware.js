import { TranslationAPI } from "../../components/Translator/TranslationAPI"
import { 
    ACTION_TRANSLATE_ADD, 
    ACTION_TRANSLATE_FETCH, 
    ACTION_TRANSLATE_REMOVE,
    translateAddErrorAction, 
    translateFetchSuccessAction, 
    translateFetchErrorAction,
    translateRemoveErrorAction, 
    translateFetchAction} from "../actions/translateActions"

export const translateMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_TRANSLATE_ADD) {

        TranslationAPI.addTranslation(action.payload)
            .catch(error => {
                dispatch(translateAddErrorAction(error.message))
            })
    }
    
    if (action.type === ACTION_TRANSLATE_FETCH) {

        TranslationAPI.getTranslations(action.payload, 10) // show only the last 10 translations
            .then(translations => {
                dispatch(translateFetchSuccessAction(translations))
            })
            .catch(error => {
                dispatch(translateFetchErrorAction(error.message))
            })
    }

    if (action.type === ACTION_TRANSLATE_REMOVE) {
        if (TranslationAPI.removeTranslations(action.payload))
        {
            dispatch(translateFetchAction())
        }
        else {
            dispatch(translateRemoveErrorAction("Could not remove translations."))
        }
    }

}