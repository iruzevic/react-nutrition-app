import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { AuthStore } from 'state/AuthStore';
import { NavLinks } from 'enums/NavLinks';
import { Header } from './Header';

interface IPrivateRoute extends RouteProps {
  state?: AuthStore;
}

@inject('state')
@observer
export class PrivateRoute extends React.Component<IPrivateRoute, any> {
  public static defaultProps = {
    state: null,
  };

  public render() {
    const { state, ...rest } = this.props;
    if (state.isAuth()) {
      return <Route {...rest} />;
    }

    return <Redirect to={NavLinks.LOGIN} />;
  }
}
