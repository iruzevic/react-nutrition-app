import * as React from 'react';
import { css } from 'emotion';

import { Button } from 'components/FormFields/Button';
import { Input } from 'components/FormFields/Input';
import { placeholders } from 'styles/utils/placeholders';
import { CallToActionText } from 'components/CallToActionText';
import { NavLinks } from 'enums/NavLinks';

export class Register extends React.Component {
  public handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted:');
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit} className={styleAuthForm}>
        <h1 className={placeholders.authHeading}>Sign up</h1>
        <div className={placeholders.formField}>
          <Input
            name="email"
            placeholder="Email"
            style="auth"
          />
        </div>
        <div className={placeholders.formField}>
          <Input
            name="name"
            placeholder="Name"
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
          <Input
            name="cpass"
            placeholder="Password again"
            type="password"
            style="auth"
          />
        </div>
        <div className={placeholders.formField}>
          <Button
            value="Create an Account"
          />
        </div>

        <CallToActionText
          label="Already have an account?"
          linkLabel="Login here"
          link={NavLinks.LOGIN}
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
