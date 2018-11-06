import { css } from 'emotion';
import { sharedVariables } from './shared-variables';


const siteContainer = css`
  padding-left: ${sharedVariables.containerSpacing};
  padding-right: ${sharedVariables.containerSpacing};
  margin: 0 auto;
`;

export const placeholders = {
  siteContainer,
};
