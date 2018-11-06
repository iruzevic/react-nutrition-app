import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css, cx } from 'emotion';

import { zindexes } from './../styles/utils/shared-variables';
import { colors } from './../styles/utils/colors';
import { icons } from './../assets/icons';

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen
    };
    
    // console.log(this.props.isOpen);
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    console.log(this.state, 'aa');
    return (
      <div className={cx(styleNavigation, {[styleNavigationActive] : this.state.isOpen})}>
        <div className={styleCloseBtn} onClick={this.closeMenu}>
          <i className={styleCloseIcon}></i>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/user-details">User Details</Link>
          </li>
        </ul>
      </div>
    );
  }
}


const styleNavigation = css`
  position: fixed;
  left: -90vw;
  top: 0;
  width: 90vw;
  height: 100vh;
  z-index: ${zindexes.menu};
  background-color: ${colors.tundora};
  transition-property: transform;
  transition-timing-function: ease-in;
  transition-duration: 0.25s;
`;

const styleNavigationActive = css`
  transform: translateX(100%);
`;

const styleCloseBtn = css`
  color: translateX(100%);
  position: absolute;
  right: 0;
  top: 0;

`;

const styleCloseIcon = css`
  background-image: url(${icons.plus});
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 12px;
  display: block;
`;
