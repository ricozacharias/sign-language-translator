import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { Link } from 'react-router-dom'
import AppContainer from '../../hoc/AppContainer'
import {translateAddAction} from "../../store/actions/translateActions"
import TranslationItem from "../Translator/TranslationItem";

export const Translator = () => {

    // translator page with input of text and output of translation
    const dispatch = useDispatch()
    const { username = '', id : userid = '' } = useSelector(state => state.session)
    const [translation, setTranslation] = useState('')

    // translate button: saves input and add it to users translation history
    const onTranslateClick = event => {
        let text = document.getElementById('textToTranslate').value;
        setTranslation(text);
        dispatch(translateAddAction({userid, text}));
    }

    return (
        <AppContainer>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <header className="mb-5">
                            <h1>Hi, {username}!</h1>

                            <div className="mb-3">
                                <label htmlFor="textToTranslate" className="form-label">What would you like to translate?</label>
                                <input id="textToTranslate" type="text" placeholder="Enter text to translate" className="form-control" />
                            </div>

                            <button type="button" className="btn btn-primary" onClick={onTranslateClick}>Translate</button>

                            <Link className="btn btn-secondary ms-3" to="/profile">Last translations</Link>

                        </header>
                        
                    </div>
                    <div className="col-sm">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} className="logo" alt="Logo" />
                    </div>
                </div>
                <div className="row">
                    {translation &&
                        <TranslationItem textToTranslate={translation} />
                    }
                </div>
            </div>


        </AppContainer>
    )
}
export default Translator