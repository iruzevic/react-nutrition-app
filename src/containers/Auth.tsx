import * as React from 'react';
import { css, cx } from 'emotion';

import AuthBgImage from '../assets/login-bg.jpg';
import { colors } from 'styles/utils/colors';
import { placeholders } from 'styles/utils/placeholders';

export class Auth extends React.Component <{
  formType: any;
}> {
  public handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted:');
  }

  public render() {
    const FormType = this.props.formType;

    return (
      <div>
        <div className={styleBgImage} />

        <div className={cx(placeholders.siteContainer, styleContainer)}>
          <div className={styleWrap}>
            <FormType />
          </div>
        </div>
      </div>
    );
  }
}

const styleBgImage = css `
  background-image: url(${AuthBgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

const styleContainer = css `
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: relative;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const styleWrap = css `
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  flex-flow: column;
`;
