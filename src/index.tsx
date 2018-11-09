import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import registerServiceWorker from 'registerServiceWorker';
import state from 'state';

import { NavLinks } from 'enums/NavLinks';
import { Header } from 'components/Header';

import 'styles/global';

import { Dashboard } from 'containers/Dashboard';
import { User } from 'containers/User';
import { Entry } from 'containers/Entry';
import { Nutrients } from 'containers/Nutrients';
import { Error404 } from 'containers/Error404';

ReactDOM.render(
  <Provider state={state}>
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path={NavLinks.HOME} component={Dashboard} />
          <Route path={NavLinks.USER} component={User} />
          <Route path={NavLinks.ENTRY} component={Entry} />
          <Route path={NavLinks.NUTRIENTS} component={Nutrients} />
          <Route component={Error404} />
        </Switch>

      </div>
    </Router>
  </Provider>,
  document.querySelector('.js-app'),
);
registerServiceWorker();
