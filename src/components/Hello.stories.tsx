import {checkA11y} from '@storybook/addon-a11y';
import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/react';
import * as React from 'react';

import {withRouter} from 'utils/storybook/withRouter';
import {Hello} from './Hello';

const note = `
<h2>Behaviour</h2>

<h2>a11y notes</h2>

`;

storiesOf('Hello', module)
  .addDecorator(withRouter)
  .addDecorator(checkA11y)
  .add('default state', withNotes(note)(() => (
    <Hello />
  )));
