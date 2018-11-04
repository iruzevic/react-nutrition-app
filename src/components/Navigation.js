import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
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
