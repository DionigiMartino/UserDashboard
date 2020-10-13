import React, { useContext } from 'react';
import firebase from './Firebase'
import {firebaseAuth} from './provider/AuthProvider'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'

// Import Login

import Login from './components/Login/Login'

// Import Dashboard 

import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  const {test} = useContext(firebaseAuth)
  console.log(test)

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}


export default App;
