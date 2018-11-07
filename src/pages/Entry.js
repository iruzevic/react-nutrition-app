import React, { Component } from 'react';

import { Intro } from './../components/Intro/Intro';

export class Entry extends Component {
  render() {
    return (
      <div>
        <Intro type="simple" title="Entry" />
      </div>
    );
  }
}
