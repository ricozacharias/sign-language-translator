import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AppContainer from '../../hoc/AppContainer'
import { Link } from "react-router-dom"
import { sessionLogoutAction } from '../../store/actions/sessionActions'
import { translateRemoveAction } from '../../store/actions/translateActions'
import ProfileTranslations from './ProfileTranslations'

export const Profile = () => {

    // profile page with Logout button and last translations
    const mySwal = withReactContent(Swal)
    const dispatch = useDispatch()
    const { username = '', id : userid = '' } = useSelector(state => state.session)
    const { translateError, translations } = useSelector(state => state.translate)

    // prompt for logout and clear session
    const onLogoutClick = () => {
        mySwal.fire({
            backdrop: true,
            denyButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonColor: 'var(--bs-yellow)',
            cancelButtonColor: 'var(--bs-teal)',
            title: <p>Logout?</p>,
            text: 'Are you sure you want to logout?',
            cancelButtonText: 'No',
            confirmButtonText: 'Yes, Logout'
        }).then(result => {
            if (result.isConfirmed) {
                // clear session, will redirect to login page
                dispatch(sessionLogoutAction())
            }
        })
    }

    // mark all translations as deleted for useer
    const onClearTranslationsClick = () => {
        dispatch(translateRemoveAction(userid))
    }

    return (
        <AppContainer>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <header className="mb-5">
                            <h1>Hi, {username}!</h1>
                            <p>Welcome to your profile</p>
                            <button className="btn btn-warning" onClick={onLogoutClick}>Logout</button>
                            <Link className="btn btn-secondary ms-3" to="/translate">Back to Translator</Link>                
                        </header>

                        {translateError &&
                        <div className="alert alert-danger" role="alert">
                            <p className="d-flex mb-0">
                                <span className="material-icons">error</span>&nbsp;
                                <span>{translateError}</span>
                            </p>
                        </div>
                        }
                    </div>
                    <div className="col-sm">
                        <img src={process.env.PUBLIC_URL + '/logo-Hello.png'} className="logo" alt="Logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    <ProfileTranslations />
                
                    {translations.length > 0 &&
                    <button className="btn btn-warning mb-5" onClick={onClearTranslationsClick}>Clear Translations</button>
                    }
                    </div>
                </div>
            </div>

        </AppContainer>
    )
}
export default Profile