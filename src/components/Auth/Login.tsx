import * as React from 'react';
import { css } from 'emotion';
import { inject, observer } from 'mobx-react';

import { Button } from 'components/FormFields/Button';
import { Input } from 'components/FormFields/Input';
import { placeholders } from 'styles/utils/placeholders';
import { CallToActionText } from 'components/CallToActionText';
import { NavLinks } from 'enums/NavLinks';
import { AuthStore } from 'state/AuthStore';
import { withRouter, Redirect } from 'react-router-dom';
import { object } from 'prop-types';
import { login } from 'services/auth';

@inject('state')
@observer
export class Login extends React.Component <{
  state: AuthStore;
  username: string;
  password: string;
}> {
  public handleSubmit = (event) => {
    console.log(event.target.username);
    event.preventDefault();
    this.props.state.signIn({
     username: event.target.username,
     password: event.target.password,
    });
  }

  public render() {
    if (this.props.state.isAuth()) {
      return <Redirect to={NavLinks.HOME} />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className={placeholders.authHeading}>Login {this.props.state.isAuth()}</h1>
        <div className={placeholders.formField}>
          <Input
            name="username"
            placeholder="Username"
            style="auth"
            value={this.props.username}
          />
        </div>
        <div className={placeholders.formField}>
          <Input
            name="password"
            placeholder="Password"
            type="password"
            style="auth"
            value={this.props.password}
          />
        </div>
        <div className={placeholders.formField}>
          <Button
            value="Sign in"
          />
        </div>

        <CallToActionText
          linkLabel="Forgot passowrd?"
          link={NavLinks.LOSTPASS}
          color="negative"
          align="center"
          linkColor="tertiary"
        />

        <CallToActionText
          label="Not registered?"
          linkLabel="Create an Account"
          link={NavLinks.REGISTER}
          color="negative"
          align="center"
          linkColor="tertiary"
        />
      </form>
    );
  }
}
