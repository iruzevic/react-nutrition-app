import * as React from 'react';
import { css } from 'emotion';

import { resets } from 'styles/utils/resets';
import { colors, baseColors } from 'styles/utils/colors';
import { placeholders } from 'styles/utils/placeholders';

export class Button extends React.Component <{
  id?: string;
  value?: string;
}> {
  public render() {
    return (
      <div className={styleWrap}>
        <button
          id={this.props.id}
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

  &:hover,
  &:focus {
    background-color: ${colors.brick};
  }
`;
