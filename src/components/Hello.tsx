import { css } from 'emotion';
import * as React from 'react';

import { BASE_COLOR } from 'consts/colors';

const main = css`
  color: ${BASE_COLOR};
`;

export class Hello extends React.Component {
  public render() {
    return (
      <h1 className={main}>Hello world</h1>
    );
  }
}
