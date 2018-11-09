import * as React from 'react';
import { css } from 'emotion';

import { sharedVariables } from '../../styles/utils/shared-variables';
import { colors } from '../../styles/utils/colors';
import { IntroText } from './IntroText';

export class Intro extends React.Component <{
  type: string;
  title: string;
  subtitle?: string;
}> {
  public render() {
    return (
      <div className={styleIntro}>
        {this.props.type === 'simple' ? <IntroText title={this.props.title} subtitle={this.props.subtitle} /> : ''}
      </div>
    );
  }
}

const styleIntro = css`
  min-height: calc(200 - ${sharedVariables.headerHeight})px;
  color: ${colors.white};
  background-image: linear-gradient(to bottom, ${colors.boston}, ${colors.aqua});
  position: relative;
  overflow: hidden;
  padding: 10px 0 70px;

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