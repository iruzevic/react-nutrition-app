import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { css, cx } from 'emotion';
import { bind } from 'decko';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { Navigation } from './Navigation/Navigation';

import { colors, baseColors } from '../styles/utils/colors';
import { fontSizes, sharedVariables } from '../styles/utils/shared-variables';
import { resets } from '../styles/utils/resets';
import { NavLinks } from '../enums/NavLinks';

import { Icons } from '../assets/icons';
import { placeholders } from 'styles/utils/placeholders';

@observer
export class Header extends React.Component {
  @observable
  public menuState: {
    isOpen: boolean;
  } = {
    isOpen: false,
  };

  @bind
  public toggleMenu() {
    this.menuState.isOpen = !this.menuState.isOpen;
  }

  public render() {
    return (
      <div>
        <div className={styleHeader}>
          <div className={styleContainer}>
            <div className={styleContainerWrap}>
              <div className={styleItem}>
                <div className={cx(styleButtonLink, styleMenuLink)} onClick={this.toggleMenu} role="Menu">
                  <Icons.Menu />
                </div>
              </div>

              <div className={styleItem}>
                <NavLink exact to={NavLinks.HOME} className={styleAppTitle}>
                  App
                </NavLink>
              </div>

              <div className={styleItem}>
                <NavLink exact to={NavLinks.ENTRY} className={cx(styleButtonLink, stylePlusLink)}>
                  <Icons.Plus />
                </NavLink>
            </div>
            </div>
          </div>
        </div>

        <Navigation toggleMenu={this.toggleMenu} isOpen={this.menuState.isOpen} />
      </div>

    );
  }
}

const styleHeader = css`
  height: ${sharedVariables.headerHeight}px;
  color: ${colors.white};
  background-image: linear-gradient(to bottom, ${colors.teal}, ${colors.boston});
`;

const styleContainer = css`
  height: 100%;
`;

const styleMenuIcon = css`
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 12px;
  display: block;
`;

const styleContainerWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const styleItem = css`
  height: 100%;
  display: flex;
  align-items: center;
`;

const styleButtonLink = css`
  padding: 0 ${sharedVariables.containerSpacing}px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const styleMenuLink = css`
`;

const stylePlusLink = css`

`;

const stylePlusIcon = css`
  background-position: center;
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  display: block;
`;

const styleAppTitle = css`
  ${resets.heading};
  font-weight: 600;
  font-size: ${fontSizes.default};
  color: ${colors.white};
  text-decoration: none;
  ${placeholders.linkTransition};

  &:hover {
    color: ${colors.mercury};
  }
`;
