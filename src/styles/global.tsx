import {injectGlobal} from 'emotion';
import emotionNormalize from 'emotion-normalize';

import {baseColors} from './utils/colors';
import {sharedVariables, fontSizes} from './utils/shared-variables';

// tslint:disable-next-line
injectGlobal`

${emotionNormalize}

*, *::after, *::before {
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
}

body {
  font-family: ${sharedVariables.baseFontFamily};
  background-color: ${baseColors.baseBg};
  color: ${baseColors.baseText};
  font-weight: normal;
  font-size: ${fontSizes.default};
}
`;