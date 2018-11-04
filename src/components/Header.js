import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">+</Link>
          </div>
        </div>

        <Navigation></Navigation>
      </div>

    );
  }
}
