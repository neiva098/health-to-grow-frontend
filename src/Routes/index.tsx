
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotAuthorized from '../pages/messages/NotAuthorized'
import NotFound from '../pages/messages/NotFound'
import React from 'react'
import LogIn from '../pages/LogIn'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LogIn}></Route>
                <Route exact path='/unauthorized' component={NotAuthorized} />
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
