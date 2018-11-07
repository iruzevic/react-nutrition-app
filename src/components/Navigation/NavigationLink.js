import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { css, cx } from 'emotion';

import { colors, baseColors } from './../../styles/utils/colors';
import { sharedVariables } from './../../styles/utils/shared-variables';
import { icons } from './../../assets/icons';

export class NavigationLink extends Component {
  render() {
    return (
      <NavLink exact to={this.props.item.link} className={styleLink} onClick={this.props.toggleMenu}>
        {this.props.item.title}
      </NavLink>
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

const styleLink = css`
  padding: 10px ${sharedVariables.containerSpacing};
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
  background-image: url(${icons.breakfast});
  background-position: center;
  background-repeat: no-repeat;
  width: 24px;
  height: 25px;
  display: block;
  margin-right: 25px;
`;
