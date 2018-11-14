import * as React from 'react';
import { css, cx } from 'emotion';

import { zindexes, sharedVariables } from '../../styles/utils/shared-variables';
import { colors, baseColors } from '../../styles/utils/colors';
import { NavigationList } from './NavigationList';
import { UserInfo } from './UserInfo';

import { Icons } from '../../assets/icons';

export class Navigation extends React.Component <{
  isOpen: boolean;
  toggleMenu(): void;
}> {
  public componentWillMount() {
    document.addEventListener('keyup', (e) => {
        if (e.keyCode === 27 && this.props.isOpen) {
          this.props.toggleMenu();
        }
    });
  }

  public render() {
    return (
      <div className={cx(styleNavigation, {[styleNavigationActive] : this.props.isOpen})}>
        <div className={styleCloseBtn} onClick={this.props.toggleMenu} role="Menu">
          <Icons.Remove />
        </div>

        <div className={styleContainer}>
          <div className={styleUserInfo}>
            <UserInfo toggleMenu={this.props.toggleMenu} />
          </div>
          <NavigationList toggleMenu={this.props.toggleMenu} />
        </div>
      </div>
    );
  }
}

const styleNavigation = css`
  position: fixed;
  left: 0;
  top: 0;
  width: calc(100% - ${sharedVariables.headerHeight}px);
  height: 100vh;
  z-index: ${zindexes.menu};
  background-color: ${colors.mine};
  transition-property: transform;
  transition-timing-function: ease-in;
  transition-duration: 0.25s;
  transform: translateX(-150%);
`;

const styleNavigationActive = css`
  transform: translateX(0);
`;

const styleCloseBtn = css`
  background-color: ${colors.mine};
  color: ${colors.mine};
  position: absolute;
  right: -${sharedVariables.headerHeight}px;
  top: 0;
  width: ${sharedVariables.headerHeight}px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${sharedVariables.headerHeight}px;
  cursor: pointer;
  transition-property: background-color;
  transition-timing-function: ease-in;
  transition-duration: 0.25s;

  &:hover{
    background-color: ${baseColors.primary}
  }
`;

const styleCloseIcon = css`
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 12px;
  display: block;
`;

const styleContainer = css`
  padding: 20px 0;
  height: 100%;
`;

const styleUserInfo = css`
  padding-bottom: 50px;
`;
