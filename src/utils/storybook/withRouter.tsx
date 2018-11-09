import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const withRouter = (story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
);
