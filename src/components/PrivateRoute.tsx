import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { AppData } from 'state/AppData';
import { NavLinks } from 'enums/NavLinks';

@inject('state')
@observer
export class PrivateRoute extends React.Component <{
  state: AppData;
  exact: boolean;
  path: string;
  component: any;
}> {
  public render() {
    const { state, ...rest } = this.props;
    if (state.isAuth()) {
      return <Route {...rest} />;
    }

    return <Redirect to={NavLinks.LOGIN} />;
  }
}
