import * as React from 'react';

import { Intro } from '../components/Intro/Intro';

export class User extends React.Component {
  public render() {
    return (
      <div>
        <Intro type="simple" title="User" subtitle="details" />
      </div>
    );
  }
}
