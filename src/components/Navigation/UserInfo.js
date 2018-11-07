import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css, cx } from 'emotion';

import { zindexes } from './../../styles/utils/shared-variables';
import { colors } from './../../styles/utils/colors';
import { fontSizes, sharedVariables } from './../../styles/utils/shared-variables';
import { icons } from './../../assets/icons';

export class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Ivan Ružević',
      email: 'ruzevic.ivan@gmail.com'
    };
  }

  render() {
    return (
      <div className={styleContainer}>
        <div className={styleWrap}>
          <div className={styleAvatar}>
            <i className={styleAvatarIcon}></i>
          </div>
          <div className={styleInfo}>
            <div className={styleName}>{this.state.name}</div>
            <div className={styleEmail}>{this.state.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

const styleContainer = css`
  padding: 0 ${sharedVariables.containerSpacing};
`;
const styleWrap = css`
  position: relative;
  padding-left: 50px;
`;

const styleAvatar = css`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const styleAvatarIcon = css`
  background-image: url(${icons.user});
  background-position: center;
  background-repeat: no-repeat;
  width: 28px;
  height: 32px;
  display: block;
  `;
const styleInfo = css`

`;
const styleName = css`
  font-weight: 600;
  padding-bottom: 5px;
`;

const styleEmail = css`
  font-size: ${fontSizes.medium};
  color: ${colors.dusty}
`;
