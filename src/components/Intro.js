import React, { Component } from 'react';
import { css, cx } from 'emotion';

import { fontSizes, sharedVariables } from './../styles/utils/shared-variables';
import { colors } from './../styles/utils/colors';

export class Intro extends Component {
  render() {
    return (
      <div className={styleIntro}>
        Intro
      </div>
    );
  }
}


const styleIntro = css`
  height: ${(200 - sharedVariables.headerHeight)}px;
  color: ${colors.white};
  background-image: linear-gradient(to bottom, ${colors.boston}, ${colors.aqua});
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    
    height: 500px;
    border-radius: 50%;
    width: 200%;
    background-color: ${colors.white};
    transform: translate(-25%, 460px);
  }
`;
