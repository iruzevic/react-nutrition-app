import { css } from 'emotion';
import { sharedVariables, zindexes } from './shared-variables';
import { colors, baseColors } from './colors';

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

const buttonTransition = css`
  transition-property: background-color, color;
  transition-timing-function: ease-in;
  transition-duration: 0.25s;
`;

const inputFocus = css`
  border-bottom-color: ${baseColors.secondary};
  transition-property: border-bottom-color;
  transition-timing-function: ease-in;
  transition-duration: 0.25s;
`;

const inputError = css`
  color: ${baseColors.primary};
  border-bottom-color: ${baseColors.primary};
  transition-property: border-bottom-color, color;
  transition-timing-function: ease-in;
  transition-duration: 0.25s;
`;

const inputIcon = css`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${zindexes.inputIcon};
`;

const inputWrap = css`
  position: relative;
`;

export const placeholders = {
  siteContainer,
  linkTransition,
  buttonTransition,
  inputFocus,
  inputError,
  inputIcon,
  inputWrap,
};
