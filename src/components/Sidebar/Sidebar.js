import React from 'react';
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import {Switch, Route} from 'react-router-dom'

const Sidebar = () => {
    return(
        <nav>
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
        </nav>
    )
}

export default Sidebar;