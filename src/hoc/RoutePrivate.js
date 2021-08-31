import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
const RoutePrivate = props => {

    const { token } = useSelector(state => state.session)

    if (!token) {
        return <Redirect to="/login" />
    } else {
        return <Route {...props} />
    }

}
export default RoutePrivate