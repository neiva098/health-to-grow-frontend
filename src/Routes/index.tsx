
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotAuthorized from '../pages/messages/NotAuthorized'
import NotFound from '../pages/messages/NotFound'
import React from 'react'
import LogIn from '../pages/LogIn'
import CreateUser from '../pages/User/Create'
import CreateAthlete from '../pages/Athlete/Create'
import CreatePersonal from '../pages/Personal/Create'
import CreateNutricionista from '../pages/Nutricionista/Create'
import AthleteHome from '../pages/Athlete/Home'
import AthleteConsultList from '../pages/Athlete/Consultas/List'
import AgendarNutricionista from '../pages/Nutricionista/Consulta/Marcar'
import AgendarPersonal from '../pages/Nutricionista/Consulta/Marcar'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LogIn}></Route>
                <Route exact path='/registry' component={CreateUser}></Route>
                <Route exact path='/registry/atleta' component={CreateAthlete}></Route>
                <Route exact path='/registry/personal' component={CreatePersonal}></Route>
                <Route exact path='/registry/nutricionista' component={CreateNutricionista}></Route>
                <Route exact path='/athlete/home' component={AthleteHome}></Route>
                <Route exact path='/athlete/consults' component={AthleteConsultList}></Route>
                <Route exact path='/athlete/consult/nutricionista/create' component={AgendarNutricionista}></Route>
                <Route exact path='/athlete/consult/personal/create' component={AgendarPersonal}></Route>
                <Route exact path='/unauthorized' component={NotAuthorized} />
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
