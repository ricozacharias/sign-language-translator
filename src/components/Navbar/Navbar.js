import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import AppContainer from "../../hoc/AppContainer"
import 'bootstrap/dist/js/bootstrap.bundle'

export const Navbar = () => {
    
    // Top navigation bar with links to pages and logged-in user  
    const { username } = useSelector(state => state.session)

    return (

        <nav className="navbar navbar-expand-md navbar-light bg-light mb-3 fixed-top">
            <AppContainer>
                <Link className="navbar-brand" to="/translate">Sign Language Translator</Link>
                {username &&
                    <>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mainNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/translate">Translator</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                </li>                                
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link d-flex" to="/profile">
                                        <span className="material-icons">account_circle</span>
                                        &nbsp;Welcome, {username}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </>
                }
            </AppContainer>
        </nav>
    )
}