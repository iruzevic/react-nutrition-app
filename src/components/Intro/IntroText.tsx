import * as React from 'react';
import { css } from 'emotion';

import { fontSizes } from '../../styles/utils/shared-variables';
import { resets } from '../../styles/utils/resets';

export class IntroText extends React.Component <{
  title: string;
  subtitle?: string;
}> {
  public render() {
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
