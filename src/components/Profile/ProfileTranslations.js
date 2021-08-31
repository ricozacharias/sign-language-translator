import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { translateFetchAction } from "../../store/actions/translateActions"
import TranslationItem from "../Translator/TranslationItem";

const ProfileTranslations = () => {

    // component for display of last translations
    const dispatch = useDispatch()
    const session = useSelector(state => state.session)

    const { translateError, translations } = useSelector(state => state.translate)
    
    // gets last 10 translations for user
    useEffect(() => {
        dispatch(translateFetchAction(session.id))
    }, [dispatch, session])

    return (
        <>
        {translations.length > 0 &&
        <div>
            <h4 className="mb-3">Here are your last translations</h4>

            {translateError &&
            <div className="alert alert-danger" role="alert">
                <p className="d-flex mb-0">
                    <span className="material-icons">error</span>&nbsp;
                    <span>{translateError}</span>
                </p>
            </div>
            }

            {translations.map(translation => <TranslationItem key={translation.id} textToTranslate={translation.text} />)}
        </div>
        }
        </>
    )
}
export default ProfileTranslations