import * as React from 'react';
import { css } from 'emotion';
import { inject, observer } from 'mobx-react';

import { Button } from 'components/FormFields/Button';
import { Input } from 'components/FormFields/Input';
import { placeholders } from 'styles/utils/placeholders';
import { CallToActionText } from 'components/CallToActionText';
import { NavLinks } from 'enums/NavLinks';
import { AppData } from 'state/AppData';

@inject('state')
@observer
export class Login extends React.Component <{
  state: AppData;
}> {
  public handleSubmit = (event) => {
    event.preventDefault();
    this.props.state.signIn();
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit} className={styleAuthForm}>
        <h1 className={placeholders.authHeading}>Login {this.props.state.isAuth()}</h1>
        <div className={placeholders.formField}>
          <Input
            name="username"
            placeholder="Username"
            style="auth"
          />
        </div>
        <div className={placeholders.formField}>
          <Input
            name="password"
            placeholder="Password"
            type="password"
            style="auth"
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

const styleAuthForm = css `
  // height: 100vh;
`;
