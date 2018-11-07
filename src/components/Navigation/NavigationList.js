import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css, cx } from 'emotion';

import { zindexes } from './../../styles/utils/shared-variables';
import { colors } from './../../styles/utils/colors';
import { fontSizes, sharedVariables } from './../../styles/utils/shared-variables';
import { icons } from './../../assets/icons';
import { resets } from './../../styles/utils/resets';
import { NavigationLink } from './NavigationLink';
import { NavLinks } from './../../enums/Navigation';

export class NavigationList extends Component {
  constructor(props) {
    super(props);

    this.menu = [
      {
        id: 'home',
        title: 'Home',
        link: NavLinks.HOME,
        icon: icons.breakfast,
      },
      {
        id: 'user',
        title: 'User',
        link: NavLinks.USER,
        icon: icons.breakfast,
      },
      {
        id: 'entry',
        title: 'Entry',
        link: NavLinks.ENTRY,
        icon: icons.breakfast,
      },
      {
        id: 'nutrients',
        title: 'Nutrients',
        link: NavLinks.NUTRIENTS,
        icon: icons.breakfast,
      },
    ];
  }
props
  render() {
    return (
      <ul className={styleList}>
        {this.menu.map((item) =>
          <li className={styleItem} key={item.id}>
            <NavigationLink item={item} toggleMenu={this.props.toggleMenu} />
          </li>
        )}
      </ul>
    );
  }
}

// <li className={styleItem}>
//           <Link to="/" className={styleLink}>
//             <i className={styleLinkIcon}></i>
//             Home
//           </Link>
//         </li>
//         <li className={styleItem}>
//           <Link to="/user-details" className={styleLink}>User Details</Link>
//         </li>


const styleList = css`
  ${resets.list};
`;
const styleItem = css`
`;
const styleLink = css`
  padding: 5px ${sharedVariables.containerSpacing};
  display: flex;
  align-items: center;
  color: ${colors.white}
  text-decoration: none

  &:hover{
    background-color: ${colors.white}
  }
`;
const styleLinkIcon = css`
  background-image: url(${icons.breakfast});
  background-position: center;
  background-repeat: no-repeat;
  width: 24px;
  height: 25px;
  display: block;
  margin-right: 25px;
`;
