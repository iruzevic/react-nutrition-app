import * as React from 'react';
import { css } from 'emotion';

import { Button } from 'components/FormFields/Button';
import { Input } from 'components/FormFields/Input';
import { placeholders } from 'styles/utils/placeholders';
import { CallToActionText } from 'components/CallToActionText';
import { NavLinks } from 'enums/NavLinks';

export class LostPassword extends React.Component {
  public handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted:');
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit} className={styleAuthForm}>
        <h1 className={placeholders.authHeading}>Lost Password</h1>
        <div className={placeholders.formField}>
          <Input
            name="email"
            placeholder="Email"
            style="auth"
            type="email"
          />
        </div>
        <div className={placeholders.formField}>
          <Button
            value="Retrieve password"
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
