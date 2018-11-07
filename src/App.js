import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLinks } from './enums/Navigation';
import { Header } from './components/Header';

import './styles/global';

import { Dashboard } from './pages/Dashboard';
import { User } from './pages/User';
import { Entry } from './pages/Entry';
import { Nutrients } from './pages/Nutrients';
import { Error404 } from './pages/Error404';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>

          <Switch>
            <Route exact path={NavLinks.HOME} component={Dashboard} />
            <Route path={NavLinks.USER} component={User} />
            <Route path={NavLinks.ENTRY} component={Entry} />
            <Route path={NavLinks.NUTRIENTS} component={Nutrients} />
            <Route component={Error404}/>
          </Switch>
 
        </div>
      </Router>
    );
  }
}
