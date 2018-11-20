import * as React from 'react';
import { css, cx } from 'emotion';

import AuthBgImage from '../assets/login-bg.jpg';
import { colors } from 'styles/utils/colors';
import { Button } from 'components/FormFields/Button';
import { Input } from 'components/FormFields/Input';
import { placeholders } from 'styles/utils/placeholders';
import { resets } from 'styles/utils/resets';
import { fontSizes } from 'styles/utils/shared-variables';

export class Login extends React.Component {
  public handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted:');
  }

  public render() {
    return (
      <div>
        <div className={styleBgImage} />

        <form onSubmit={this.handleSubmit} className={styleAuthForm}>
          <div className={cx(placeholders.siteContainer, styleContainer)}>
            <div className={styleWrap}>
              <h1 className={styleHeading}>Login</h1>
              <div className={placeholders.formField}>
                <Input
                  name="username"
                  id="username"
                  placeholder="Username"
                  style="auth"
                />
              </div>
              <div className={placeholders.formField}>
                <Input
                  name="password"
                  id="password"
                  placeholder="Password"
                  style="auth"
                  type="password"
                />
              </div>
              <div className={placeholders.formField}>
                <Button
                  name="submit"
                  id="submit"
                  value="Sign in"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const styleBgImage = css `
  background-image: url(${AuthBgImage});
  background-size: cover;
  background-position: center;
  backgorund-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  &::after {
    content: '';
    background-color: ${colors.mine};
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const styleAuthForm = css `
  height: 100vh;
`;

const styleContainer = css `
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: relative;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const styleWrap = css `
  width: 100%;
`;

const styleHeading = css `
  ${resets.heading};
  width: 100%;
  color: ${colors.white};
  font-size: ${fontSizes.big};
  text-align: center;
  margin-bottom: 50px;
  font-weight: normal;
`;
