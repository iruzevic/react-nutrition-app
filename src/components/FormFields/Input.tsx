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
  className?: string;
  style?: string|undefined;
  type?: string;
}> {
  public render() {
    const Icon = this.props.icon;
    const type = this.props.type;

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
          type={type ? type : 'text'}
          value={this.props.value}
          name={this.props.name}
          placeholder={this.props.placeholder}
          className={styleInput(this.props.icon, this.props.style)}
        />

        <div className={styleUnit}>
          {this.props.unit}
        </div>
      </div>
    );
  }
}

const styleWrap = css `
  ${placeholders.inputWrap}
`;

const styleInput = (icon: string|undefined, style: string|undefined) => css `
  ${resets.input};
  border-bottom: 1px solid ${colors.alto};
  background-color: ${colors.white};
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

  ${style === 'auth'
    ? `
    background-color: transparent;
    color: ${colors.white};

    &::placeholder {
      color: ${colors.white};
    }
    `
    : ''}
`;

const styleIcon = css `
  ${placeholders.inputIcon}
`;

const styleUnit = css `
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
