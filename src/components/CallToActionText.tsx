import * as React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';

import { colors, baseColors, linkColor } from '../styles/utils/colors';
import { fontSizes } from '../styles/utils/shared-variables';
import { placeholders } from '../styles/utils/placeholders';
import { resets } from 'styles/utils/resets';

export class CallToActionText extends React.Component <{
  label?: string;
  linkLabel: string;
  link: string;
  color?: string;
  align?: string;
  linkColor?: string;
}> {
  public render() {
    return (
      <div className={styleWrap(this.props.color, this.props.align)}>
        {this.props.label
          ?
          <span className={styleLabel}>
            {this.props.label}
          </span>
          : ''
        }

        <NavLink exact to={this.props.link} className={styleLink(this.props.linkColor)}>
          {this.props.linkLabel}
        </NavLink>
      </div>
    );
  }
}

const styleWrap = (color: string|undefined, align: string|undefined) => css `
  ${placeholders.siteContainer};
  font-size: ${fontSizes.medium};
  margin-top: 20px;
  color: ${colors.dusty};

  ${color === 'negative'
    ? `
    color: ${colors.white};
    `
    : ''}

  ${align === 'center'
    ? `
    text-align: center;
    `
    : `
    text-align: right;
    `}
`;
const styleLabel = css `
  padding-right: 5px;
`;
const styleLink = (color = 'primary') => css `
  ${resets.link};
  ${linkColor[color]};
`;
