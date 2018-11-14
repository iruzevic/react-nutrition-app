import * as React from 'react';
import { css } from 'emotion';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from 'enums/NavLinks';

import { colors, baseColors } from '../../styles/utils/colors';
import { fontSizes, sharedVariables } from '../../styles/utils/shared-variables';
import { Icons } from '../../assets/icons';
import { placeholders } from 'styles/utils/placeholders';

@observer
export class UserInfo extends React.Component <{
  toggleMenu(): void;
}> {
  @observable
  public userInfoState: {
    name: string;
    email: string;
  } = {
    name: 'Ivan Ružević',
    email: 'ruzevic.ivan@gmail.com',
  };

  public render() {
    return (
      <div className={styleContainer}>
        <div className={styleWrap}>
          <div className={styleAvatar}>
            <Icons.User />
          </div>
          <div className={styleInfo}>
            <NavLink exact to={NavLinks.USER} className={styleName} onClick={this.props.toggleMenu}>
              {this.userInfoState.name}
            </NavLink>
            <div className={styleEmail}>{this.userInfoState.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

const styleContainer = css`
  padding: 0 ${sharedVariables.containerSpacing}px;
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

const styleInfo = css`

`;

const styleName = css`
  font-weight: 600;
  padding-bottom: 5px;
  color: ${colors.white};
  text-decoration: none;
  ${placeholders.linkTransition};

  &:hover {
    color: ${baseColors.primary};
  }
`;

const styleEmail = css`
  font-size: ${fontSizes.medium};
  color: ${colors.dusty}
`;
