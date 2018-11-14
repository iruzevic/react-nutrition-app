
import * as React from 'react';
import { css } from 'emotion';
import DatePicker from 'react-datepicker';
import { Moment } from 'moment';

import { resets } from 'styles/utils/resets';
import { colors, baseColors } from 'styles/utils/colors';
import { placeholders } from 'styles/utils/placeholders';

export class DatePickerCustom extends React.Component <{
  selected?: string|null;
  icon?: any;
  showTimeSelect?: boolean;
  dateFormat?: string;
  timeFormat?: string;
  placeholderText?: string;
  value?: string;
  className?: string;
  onChange(value): void;
}> {
  public render() {
    const Icon = this.props.icon;

    return(
      <div className={styleWrap}>
        {
          (Icon) ?
          <div className={styleIcon}>
            <Icon />
          </div>
          : ''
        }
        <DatePicker
          selected={this.props.selected}
          onChange={this.props.onChange}
          showTimeSelect={this.props.showTimeSelect}
          dateFormat={this.props.dateFormat}
          timeFormat={this.props.timeFormat}
          placeholderText={this.props.placeholderText}
          className={styleInput(this.props.icon)}
        />
      </div>
    );
  }
}

const styleWrap = css`
  ${placeholders.inputWrap};

  .react-datepicker-wrapper {
    display: block;
  }

  .react-datepicker__input-container {
      display: block;
    }
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
