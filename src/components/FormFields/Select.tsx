
import * as React from 'react';
import { css } from 'emotion';
import Select from 'react-select';

import { resets } from 'styles/utils/resets';
import { colors, baseColors } from 'styles/utils/colors';
import { placeholders } from 'styles/utils/placeholders';
import { Icons } from 'assets/icons';
import { zindexes } from 'styles/utils/shared-variables';

export class SelectCustom extends React.Component <{
  value?: string|null;
  icon?: any;
  isMulti?: boolean;
  placeholder?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  onChange(value): void;
}> {
  public render() {
    const Icon = this.props.icon;
    const Indicator = Icons.Arrow;

    const customStyles = {
      container: (provided) => ({
        ...provided,
      }),
      control: (provided, state) => ({
        ...provided,
        height: '46px',
        border: 'none',
        borderBottom: `1px solid ${colors.alto}`,
        borderBottomColor: state.isFocused ? baseColors.secondary : '',
        borderRadius: 0,
        paddingLeft: `${this.props.icon ? '35px' : ''}`,
        boxShadow: 'none',
      }),
      valueContainer: (provided) => ({
        ...provided,
        paddingLeft: 0,
      }),
      indicatorSeparator: () => ({}),
      menu: (provided) => ({
        ...provided,
        zIndex: zindexes.inputIcon,
        margin: 0,
        borderRadius: 0,
      }),
      menuList: (provided) => ({
        ...provided,
        padding: 0,
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? colors.white : '',
        backgroundColor: state.isFocused ? baseColors.secondary : '',
        transitionProperty: 'background-color, color',
        transitionTimingFunction: 'ease-in',
        transitionDuration: '0.25s',
        cursor: 'pointer',
      }),
    };

    return(
      <div className={styleWrap}>
        {
          (Icon) ?
          <div className={styleIcon}>
            <Icon />
          </div>
          : ''
        }
        <Select
          value={this.props.value}
          onChange={this.props.onChange}
          options={this.props.options}
          styles={customStyles}
          isMulti={this.props.isMulti}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

const styleWrap = css`
  ${placeholders.inputWrap}
`;

const styleIcon = css`
  ${placeholders.inputIcon}
`;
