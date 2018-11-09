import * as React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';

import { colors, baseColors } from '../../styles/utils/colors';
import { sharedVariables } from '../../styles/utils/shared-variables';
import { resets } from '../../styles/utils/resets';
import { menuItems } from '../../mock/menuItems';

export class NavigationList extends React.Component <{
  toggleMenu(): void;
}> {
  public menu: Array<{
    id: string;
    title: string;
    link: string;
    icon: string;
  }>;

  public renderMenuItems = (item) => {
    return(
      <li className={styleItem} key={item.id}>
        <NavLink exact to={item.link} className={styleLink} onClick={this.props.toggleMenu}>
          {item.title}
        </NavLink>
      </li>
    );
  }

  public render() {
    return (
      <ul className={styleList}>
        {menuItems.map(this.renderMenuItems)}
      </ul>
    );
  }
}

const styleList = css`
  ${resets.list};
`;

const styleItem = css`
`;

const styleLink = css`
  padding: 10px ${sharedVariables.containerSpacing}px;
  display: flex;
  align-items: center;
  color: ${colors.white};
  text-decoration: none;
  transition-property: background-color;
  transition-timing-function: ease-in;
  transition-duration: 0.25s;

  &:hover{
    background-color: ${baseColors.primary}
  }

  &.active {
    background-color: ${baseColors.primary}
  }
`;
const styleLinkIcon = css`
  background-position: center;
  background-repeat: no-repeat;
  width: 24px;
  height: 25px;
  display: block;
  margin-right: 25px;
`;
