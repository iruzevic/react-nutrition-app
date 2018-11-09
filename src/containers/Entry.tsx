import * as React from 'react';

import { Intro } from '../components/Intro/Intro';

export class Entry extends React.Component {
  public render() {
    return (
      <div>
        <Intro type="simple" title="Entry" />
      </div>
    );
  }
}
