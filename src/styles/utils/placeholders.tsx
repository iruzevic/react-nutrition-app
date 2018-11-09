import { css } from 'emotion';
import { sharedVariables } from './shared-variables';

const siteContainer = css`
  padding-left: ${sharedVariables.containerSpacing}px;
  padding-right: ${sharedVariables.containerSpacing}px;
  margin: 0 auto;
`;

const linkTransition = css`
  transition-property: color;
  transition-timing-function: ease-in;
  transition-duration: 0.25s;
`;

export const placeholders = {
  siteContainer,
  linkTransition,
};
