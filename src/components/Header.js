import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css, cx } from 'emotion';

import { Navigation } from '../components/Navigation';

import { colors } from './../styles/utils/colors';
import { fontSizes } from './../styles/utils/shared-variables';
import { placeholders } from './../styles/utils/placeholders';
import { resets } from './../styles/utils/resets';
import { icons } from './../assets/icons';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }
     
  toggleMenu() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div className={styleHeader}>
          <div className={styleContainer}>
            <div className={styleContainerWrap}>
              <div className={styleItem}>
                <div className={cx(styleButtonLink, styleMenuLink)} onClick={this.toggleMenu}>
                  <i className={styleMenuIcon}></i>
                </div>
              </div>

              <div className={styleItem}>
                <h1 className={styleAppTitle}>
                  Nutrition App
                </h1>
              </div>

              <div className={styleItem}>
                <Link to="/" className={cx(styleButtonLink, stylePlusLink)}></Link>
            </div>
            </div>
          </div>
        </div>

        <Navigation isOpen={this.state.isOpen}></Navigation>
      </div>

    );
  }
}

const styleHeader = css`
  background-color: red;
  height: 60px;
  color: ${colors.white}
`;

const styleContainer = css`
  height: 100%;
`;

const styleMenuIcon = css`
  background-image: url(${icons.menu});
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
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const styleMenuLink = css`
`;

const stylePlusLink = css`
  background-image: url(${icons.plus});
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
`;
