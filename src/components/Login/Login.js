import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import AppContainer from "../../hoc/AppContainer"
import Swal from 'sweetalert2'
import { loginAttemptAction } from '../../store/actions/loginActions'

const Login = () => {

    // Login page with automatic user registration
    const [credentials, setCredentials] = useState({
        username: ''
    })
    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.session)
    const { loginAttempting, loginError } = useSelector(state => state.login)

    // save input state
    const onInputChange = e => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
        })
    }
    
    // login clicked
    const onLoginSubmit = e => {
        e.preventDefault()

        // alert if username is empty
        if (credentials.username === "") {
            Swal.fire({
                icon: 'error',
                title: 'Required field',
                text: 'Please enter your name!'
            })        
            return;
        }

        // try to login
        dispatch(loginAttemptAction(credentials))
    }

    return (
        <>
            { loggedIn && <Redirect to="/translate" />}
            { !loggedIn &&
                <AppContainer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">

                                <form onSubmit={onLoginSubmit} className="mt-3">
                                    <h1>Get started</h1>
                                    <p>Welcome to the Sign Language Translater!</p>


                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">What's your name?</label>
                                        <input id="username" type="text" placeholder="Enter your name" onChange={onInputChange} className="form-control" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Let's go!</button>
                                    
                                </form>

                                {loginError &&
                                    <div className="alert alert-danger" role="alert">
                                        <p className="d-flex mb-0">
                                            <span className="material-icons">error</span>&nbsp;
                                            <span>{loginError}</span>
                                        </p>
                                    </div>
                                }

                                {loginAttempting &&
                                    <div className="d-flex align-items-center">
                                        <div className="spinner-border spinner-border-sm m-2 d-block" role="status" aria-hidden="true"></div>
                                        <strong>Attempting to login...</strong>
                                    </div>
                                }
                            </div>
                            <div className="col-sm">
                                <img src={process.env.PUBLIC_URL + '/logo-Hello.png'} className="logo" alt="Logo" />
                            </div>
                        </div>
                </div>
                </AppContainer>
            }
        </>
    )
}
export default Login