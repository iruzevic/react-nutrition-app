import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { AppData } from 'state/AppData';
import { NavLinks } from 'enums/NavLinks';

interface IPrivateRoute extends RouteProps {
  state?: AppData;
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
