import * as React from 'react';
import { css } from 'emotion';

import { colors } from '../styles/utils/colors';
import { fontSizes } from '../styles/utils/shared-variables';
import { placeholders } from '../styles/utils/placeholders';

export class DescriptionInfo extends React.Component <{
  label: string;
}> {
  public render() {
    return (
      <div className={styleWrap}>
        {this.props.label}
      </div>
    );
  }
}

const styleWrap = css`
  ${placeholders.siteContainer};
  text-align: center;
  font-size: ${fontSizes.medium};
  margin-top: 20px;
  color: ${colors.dusty};
`;
