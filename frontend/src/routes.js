import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/newIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" exact component={Profile}></Route>
                <Route path="/newIncident" exact component={NewIncident}></Route>
            </Switch>
        </BrowserRouter>
    )
}