import * as React from 'react';
import { css, cx } from 'emotion';

import { colors, baseColors } from '../../styles/utils/colors';
import { resets } from '../../styles/utils/resets';
import { placeholders } from '../../styles/utils/placeholders';
import { fontSizes } from '../../styles/utils/shared-variables';

export class EntriesListType extends React.Component <{
  icon: string;
  label: string;
  meta: number;
}> {
  public render() {
    return (
      <div className={styleContainer}>
        <div className={styleWrap}>
          <div className={cx(styleItem, styleTitle)}>
            <div className={styleTitleIcon}>
              {this.props.icon}
            </div>
            <div className={styleLabel}>
              {this.props.label}
            </div>
          </div>
          <div className={styleItem}>
            <div className={styleMeta}>
              {this.props.meta} kcal
            </div>
            <div className={styleArrow}>
              Icon
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styleContainer = css `
  ${placeholders.siteContainer};
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.mercury}
`;
const styleWrap = css `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const styleItem = css `
  position: relative;
`;
const styleTitleIcon = css `
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const styleTitle = css `
  font-weight: 600;
  padding-left: 50px;
`;
const styleLabel = css `
  position: relative;
`;
const styleMeta = css `
  font-weight: 600;
  padding-right: 35px;
`;
const styleArrow = css `
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
