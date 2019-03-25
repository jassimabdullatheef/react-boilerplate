import React, { Component, Suspense, lazy } from 'react'
import { 
    BrowserRouter as Router,
    Route, 
    Switch, 
    Redirect, 
    withRouter
} from 'react-router-dom'

import Spinner from 'Components/Loader'

// Import Pages
const HomePage = lazy(() => import('Pages/HomePage'))
const AboutUsPage = lazy(() => import('Pages/AboutUsPage'))

// redirect to login page if not allowed
const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props} /> : <Redirect to="/login" />
)

// redirect to home page if not allowed
const RestrictedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props} /> : <Redirect to="/" />
)

class Routes extends Component {
    render() {
        return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <ProtectedRoute path="/"
                        component={HomePage}
                        isAllowed={true}
                        exact />
                    <ProtectedRoute path="/about/"
                        component={AboutUsPage}
                        isAllowed={true} />
                </Switch>
            </Suspense>
        </Router>
        )
    }
}

export default withRouter(Routes)
