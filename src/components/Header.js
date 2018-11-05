import React, { Component } from 'react';
// import { createStackNavigator } from 'react-navigation';

import { Navigation } from '../components/Navigation';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__item">
            <div>Menu</div>
          </div>

          <div className="header__item">
            <h1 className="header__app-name">
              Nutrition App
            </h1>
          </div>

          <div className="header__item">
          </div>
        </div>

        <Navigation></Navigation>
      </div>

    );
  }
}
