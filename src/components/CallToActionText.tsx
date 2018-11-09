import * as React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';

import { colors, baseColors } from '../styles/utils/colors';
import { fontSizes } from '../styles/utils/shared-variables';
import { placeholders } from '../styles/utils/placeholders';

export class CallToActionText extends React.Component <{
  label: string;
  linkLabel: string;
  link: string;
}> {
  public render() {
    return (
      <div className={styleWrap}>
        <span className={styleLabel}>
          {this.props.label}
        </span>
        <NavLink exact to={this.props.link} className={styleLink}>
          {this.props.linkLabel}
        </NavLink>
      </div>
    );
  }
}

const styleWrap = css`
  ${placeholders.siteContainer};
  text-align: right;
  font-size: ${fontSizes.medium};
  margin-top: 20px;
`;
const styleLabel = css`
  color: ${colors.dusty};
  padding-right: 5px;
`;
const styleLink = css`
  color: ${baseColors.primary};
`;
