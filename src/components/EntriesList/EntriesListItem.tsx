import * as React from 'react';
import { css, cx } from 'emotion';

import { colors, baseColors } from '../../styles/utils/colors';
import { resets } from '../../styles/utils/resets';
import { placeholders } from '../../styles/utils/placeholders';
import { fontSizes } from '../../styles/utils/shared-variables';

export class EntriesListItem extends React.Component <{
  label: string;
  amount: number;
  calories: number;
  carbs: number;
  proteins: number;
  fats: number;
}> {
  public render() {
    return (
      <div className={styleContainer}>
        <div className={styleWrap}>
          <div className={styleItem}>
            <div className={styleLabel}>
              {this.props.label} <span className={styleAmount}>({this.props.amount}g)</span>
            </div>
          </div>
          <div className={styleItem}>
            <div className={styleCalories}>
              {this.props.calories} kcal
            </div>
            <div className={styleNutrients}>
              <ul className={styleNutrientsList}>
                <li className={styleNutrientsListItem}>
                  <span className={styleNutrientsListDot} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styleContainer = css`
  ${placeholders.siteContainer};
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.mercury};
  background-color: ${colors.concrete};
`;
const styleWrap = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const styleItem = css`
  position: relative;
`;
const styleTitleIcon = css`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const styleLabel = css`
  font-size: ${fontSizes.medium};
  color: ${colors.dusty};
`;
const styleAmount = css`
`;
const styleCalories = css`
  font-weight: 600;
`;
const styleNutrients = css`
`;
const styleNutrientsList = css`
  ${resets.list};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const styleNutrientsListItem = css`
  margin-left: 10px;
  font-size: ${fontSizes.medium};
  color: ${colors.dusty};
`;
const styleNutrientsListDot = css`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${baseColors.primary};
`;
