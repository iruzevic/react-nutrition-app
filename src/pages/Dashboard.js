import React, { Component } from 'react';

import { Intro } from './../components/Intro/Intro';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Intro type="simple" title="Dashboard" />
      </div>
    );
  }
}
