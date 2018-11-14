import * as React from 'react';
import { css } from 'emotion';

import { colors, baseColors } from './../styles/utils/colors';
import { resets } from '../styles/utils/resets';
import { placeholders } from '../styles/utils/placeholders';
import { fontSizes } from '../styles/utils/shared-variables';

import { Icons } from '../assets/icons';

export class NutrientsList extends React.Component <{
  carbs: number;
  proteins: number;
  fats: number;
  calories: number;
}> {
  public items: Array<{
    type: string;
    value: number;
    icon: any;
  }> = [
    {
      type: 'carbs',
      value: this.props.carbs,
      icon: Icons.Carbs,
    },
    {
      type: 'proteins',
      value: this.props.proteins,
      icon: Icons.Proteins,
    },
    {
      type: 'fats',
      value: this.props.fats,
      icon: Icons.Fats,
    },
  ];
  public renderItems = (item) => {
    const Icon = item.icon;

    return(
      <li className={styleItem}>
        <Icon />
        <div className={styleNumber}>
          {item.value} <span className={styleUnit}>g</span>
        </div>
        <div className={stylePercent}>
          {this.getTotal(item.value)}%
        </div>
      </li>
    );
  }

  public render() {
    return (
      <div className={styleContainer}>
        <ul className={styleList}>
          {this.items.map(this.renderItems)}
        </ul>
      </div>
    );
  }

  private getTotal(numberItem: number) {
    return ((numberItem / this.props.calories) * 100).toFixed(2);
  }
}

const styleContainer = css`
  ${placeholders.siteContainer};
  padding-top: 20px;
  padding-bottom: 20px;
`;

const styleList = css`
  ${resets.list};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const styleItem = css`
  text-align: center;
`;

const styleNumber = css`
  font-size: ${fontSizes.largest};
  font-weight: 600;
`;

const styleUnit = css`
  font-size: ${fontSizes.medium};
  color: ${colors.dusty};
`;

const stylePercent = css`
  font-size: ${fontSizes.medium};
  color: ${colors.dusty};
  margin-top: 5px;
`;
