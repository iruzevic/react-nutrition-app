import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch,
} from 'react-router-dom';

import registerServiceWorker from 'registerServiceWorker';
import state from 'state';

import { NavLinks } from 'enums/NavLinks';
import { Header } from 'components/Header';

import 'styles/global';

import { Dashboard } from 'containers/Dashboard';
import { User } from 'containers/User';
import { Entry } from 'containers/Entry';
import { Nutrients } from 'containers/Nutrients';
import { NutrientsInsert } from 'containers/NutrientsInsert';
import { Error404 } from 'containers/Error404';
import { Auth } from 'containers/Auth';
import { Login } from 'components/Auth/Login';
import { Register } from 'components/Auth/Register';
import { LostPassword } from 'components/Auth/LostPassword';
import { PrivateRoute } from 'components/PrivateRoute';

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

// class Login extends React.Component <{
//   location: any;
// }> {
//   public state = {
//     redirectToReferrer: false,
//   };
//   public login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true,
//       }));
//     });
//   }
//   public render() {
//     const { location } = this.props;
//     const { from } = location.state || { from: { pathname: '/' } };
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer === true) {
//       return <Redirect to={from} />;
//     }

//     return (
//       <div>
//         <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => (
//     true
//       ? <Component {...props} />
//       : <Redirect
//           to={{
//             pathname: NavLinks.LOGIN,
//             state: { from: props.location },
//           }}
//       />
//     )}
//   />
// );

ReactDOM.render(
  <Provider state={state}>
    <Router>
      <div className="App">
        {/* <Header /> */}

        <Switch>
          <Route
            path={NavLinks.LOGIN}
            render={(props) => <Auth {...props} formType={Login} />}
          />
          <Route
            path={NavLinks.REGISTER}
            render={(props) => <Auth {...props} formType={Register} />}
          />
          <Route
            path={NavLinks.LOSTPASS}
            render={(props) => <Auth {...props} formType={LostPassword} />}
          />

          <PrivateRoute exact path={NavLinks.HOME} component={Dashboard} state={state} />
          {/* <PrivateRoute exact path={NavLinks.USER} component={User} />
          <PrivateRoute exact path={NavLinks.ENTRY} component={Entry} />
          <PrivateRoute exact path={NavLinks.NUTRIENTS} component={Nutrients} />
          <PrivateRoute exact path={NavLinks.NUTRIENTS_INSERT} component={NutrientsInsert} />
          <PrivateRoute component={Error404} /> */}
        </Switch>

      </div>
    </Router>
  </Provider>,
  document.querySelector('.js-app'),
);
registerServiceWorker();
