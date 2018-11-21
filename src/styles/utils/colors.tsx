import { css } from 'emotion';

export const colors = {
  alto:      '#E1DFDF',
  aqua:      '#00C7D3',
  boston:    '#45A0AF',
  cheese:    '#EAC248',
  concrete:  '#F2F2F2',
  dusty:     '#9B9B9B',
  lipstick:  '#C52C37',
  brick:     '#95232B',
  mine:      '#232323',
  mercury:   '#E3E3E3',
  teal:      '#0096A7',
  tundora:   '#4A4A4A',
  white:     '#FFFFFF',
};

export const baseColors = {
  primary:   colors.lipstick,
  secondary: colors.teal,
  tertiary:  colors.cheese,
  baseText:  colors.tundora,
  baseBg:    colors.white,
};

const linkPrimary = css `
  color: ${baseColors.primary};

  &:hover,
  &:focus {
    color: ${colors.brick};
  }
`;

const linkSecondary = css `
  color: ${baseColors.secondary};

  &:hover,
  &:focus {
    color: ${colors.boston};
  }
`;

const linkTertiary = css `
  color: ${baseColors.tertiary};

  &:hover,
  &:focus {
    color: ${colors.boston};
  }
`;

export const linkColor = {
  primary: linkPrimary,
  secondary: linkSecondary,
  tertiary: linkTertiary,
};
