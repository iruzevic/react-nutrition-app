import * as React from 'react';
import { css } from 'emotion';

import { resets } from 'styles/utils/resets';
import { colors, baseColors } from 'styles/utils/colors';
import { placeholders } from 'styles/utils/placeholders';

export class Button extends React.Component <{
  name?: string;
  id?: string;
  value?: string;
}> {
  public render() {
    return (
      <div className={styleWrap}>
        <button
          name={this.props.name}
          className={styleButton}
        >
        {this.props.value}
        </button>
      </div>
    );
  }
}

const styleWrap = css`
  ${placeholders.inputWrap}
`;

const styleButton = css`
  ${resets.button};
  ${placeholders.buttonTransition};
  display: block;
  width: 100%;
  height: 50px;
  font-weight: 600;
  color: ${colors.white};
  background-color: ${baseColors.primary};
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.brick};
  }

  &:focus {
    ${placeholders.inputFocus}
  }

  &.is-error {
    ${placeholders.inputError}
  }
`;
