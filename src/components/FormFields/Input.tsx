import * as React from 'react';
import { css } from 'emotion';

import { resets } from 'styles/utils/resets';
import { colors } from 'styles/utils/colors';
import { placeholders } from 'styles/utils/placeholders';

export class Input extends React.Component <{
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  unit?: string;
  icon?: any;
  className?: any;
}> {
  public render() {
    const Icon = this.props.icon;

    return (
      <div className={styleWrap}>
        {
          (Icon) ?
          <div className={styleIcon}>
            <Icon />
          </div>
          : ''
        }

        <input
          type="text"
          value={this.props.value}
          name={this.props.name}
          placeholder={this.props.placeholder}
          className={styleInput(this.props.icon)}
        />

        <div className={styleUnit}>
          {this.props.unit}
        </div>
      </div>
    );
  }
}

const styleWrap = css`
  ${placeholders.inputWrap}
`;

const styleInput = (icon) => css`
  ${resets.input};
  border-bottom: 1px solid ${colors.alto};
  height: 46px;
  width: 100%;

  &:focus {
    ${placeholders.inputFocus}
  }

  &.is-error {
    ${placeholders.inputError}
  }

  ${icon
    ? `
    padding-left: 35px;
    padding-right: 50px;
    `
    : ''}
`;

const styleIcon = css`
  ${placeholders.inputIcon}
`;

const styleUnit = css`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
