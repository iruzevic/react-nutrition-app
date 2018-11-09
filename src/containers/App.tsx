import { css } from 'emotion';
import { inject } from 'mobx-react';
import * as React from 'react';

import { Hello } from 'components/Hello';
import { AppData } from 'state/AppData';

const main = css`
`;

@inject('state')
export class App extends React.Component<{
  state: AppData;
}> {
  public render() {
    return (
      <div className={main}>
        <Hello />
      </div>
    );
  }
}
