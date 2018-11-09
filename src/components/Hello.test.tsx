import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Hello} from './Hello';

describe('components/<Hello />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello />, div);
  });
});
