import React, { Component } from 'react';

import { Intro } from './../components/Intro/Intro';

export class User extends Component {
  render() {
    return (
      <div>
        <Intro type="simple" title="User" subtitle="details" />
      </div>
    );
  }
}
