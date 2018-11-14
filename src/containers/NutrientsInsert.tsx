import * as React from 'react';
import { css } from 'emotion';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { Intro } from '../components/Intro/Intro';
import { Input } from 'components/FormFields/Input';
import { Button } from 'components/FormFields/Button';
import { SelectCustom } from 'components/FormFields/Select';
import { Icons } from '../assets/icons';
import {units} from '../mock/units';
import {nutrientsCategories} from '../mock/nutrientsCategories';
import { placeholders } from 'styles/utils/placeholders';
import { DescriptionInfo } from 'components/DescriptionInfo';

@observer
export class NutrientsInsert extends React.Component {
  @observable
  public state: {
    selectUnitsOption?: string|null;
    selectNutrientsCategoriesOption?: string|null;
  } = {
    selectUnitsOption: null,
    selectNutrientsCategoriesOption: null,
  };

  public handleChangeUnits = (selectUnitsOption: string) => {
    this.setState({ selectUnitsOption });
  }

  public handleChangeNutrientsCategories = (selectNutrientsCategoriesOption: string) => {
    this.setState({ selectNutrientsCategoriesOption });
  }

  public handleChangeDate = (selectedDate: any) => {
    this.setState({ selectedDate });
  }

  public handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted:');
  }

  public render() {
    const { selectUnitsOption, selectNutrientsCategoriesOption } = this.state;

    return (
      <div>
        <Intro type="simple" title="Add" subtitle="nutrient" />

        <div className={styleContainer}>
          <form onSubmit={this.handleSubmit}>
            <div className={styleField}>
              <Input
                name="name"
                id="name"
                placeholder="Add name"
              />
            </div>

            <div className={styleField}>
              <Input
                name="brand"
                id="brand"
                placeholder="Add brand"
              />
            </div>

            <div className={styleField}>
              <SelectCustom
                options={units}
                value={selectUnitsOption}
                onChange={this.handleChangeUnits}
                placeholder="Select unit"
              />
            </div>

            <div className={styleField}>
              <Input
                name="calories"
                id="calories"
                placeholder="Add calories"
                unit="kcal"
              />
            </div>

            <div className={styleField}>
              <Input
                name="Add carbs"
                id="Add carbs"
                placeholder="Add carbs"
                unit="g"
              />
            </div>

            <div className={styleField}>
              <Input
                name="proteins"
                id="proteins"
                placeholder="Add proteins"
                unit="g"
              />
            </div>

            <div className={styleField}>
              <Input
                name="fats"
                id="fats"
                placeholder="Add fats"
                unit="g"
              />
            </div>

            <div className={styleField}>
              <SelectCustom
                options={nutrientsCategories}
                value={selectNutrientsCategoriesOption}
                onChange={this.handleChangeNutrientsCategories}
                placeholder="Select category"
              />
            </div>

            <div className={styleField}>
              <Button
                name="submit"
                id="submit"
                value="Add Nutrient"
              />
            </div>

          </form>
          <DescriptionInfo
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque tristique tortor at sem porttitor semper.
            Donec vitae est ullamcorper, ultrices arcu in, dictum lacus."
          />
        </div>
      </div>
    );
  }
}

const styleContainer = css`
  ${placeholders.siteContainer};
`;

const styleField = css`
  margin-bottom: 10px;
`;
