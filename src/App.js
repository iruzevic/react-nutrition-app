import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/global';

import { Dashboard } from './pages/Dashboard';
import { UserDetails } from './pages/UserDetails';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/user-details" component={UserDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}
