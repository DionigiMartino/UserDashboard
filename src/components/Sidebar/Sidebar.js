import React from 'react';
import {Route} from 'react-router-dom'

const Sidebar = () => {
    return(
        <nav>
            <Route path="/prova" render={() => {return <h1>Prova1</h1>}} /> 
            <Route path="/prova2" render={() => {return <h1>Prova2</h1>}} /> 
        </nav>
    )
}

export default Sidebar;