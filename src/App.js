import React, { Component } from 'react';
import firebase from './Firebase'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'

// Import Login

import Login from './components/Login/Login'

// Import Dashboard 

import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    // I get the reference to the users name
    const userRef = firebase.database().ref('Users');
    userRef.on('value', (snapshot) => {
      let users = snapshot.val();
      let newState = [];
      for (let user in users) {
        newState.push({
          id: user,
          userName: users[user].Username,
          password: users[user].Password
        });

      }
      this.setState({
        users: newState
      })
    })
  }

  render(){
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
}

export default App;
