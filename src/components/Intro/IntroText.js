import React, { Component } from 'react';
import { css, cx } from 'emotion';

import { fontSizes, sharedVariables } from './../../styles/utils/shared-variables';
import { colors } from './../../styles/utils/colors';
import { resets } from './../../styles/utils/resets';

export class IntroText extends Component {
  render() {
    return (
      <div className={styleWrap}>
        <h2 className={styleTitle}>
          {this.props.title}
        </h2>
        <div className={styleSubtitle}>
          {this.props.subtitle}
        </div>
      </div>
    );
  }
}

const styleWrap = css`
  text-align:center;
  font-weight: 600;
`;

const styleTitle = css`
  ${resets.heading};
  font-weight: inherit;
  font-size: ${fontSizes.bigger};
`;
const styleSubtitle = css`
  font-size: ${fontSizes.larger};
`;
