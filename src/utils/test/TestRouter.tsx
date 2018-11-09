import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';

export class TestRouter extends React.Component<{
  children?: any;
}> {
  public render() {
    return (
      <MemoryRouter initialEntries={['/']}>
        {this.props.children}
      </MemoryRouter>
    );
  }
}
