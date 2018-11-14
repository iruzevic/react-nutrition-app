import * as React from 'react';
import { css } from 'emotion';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { Intro } from '../components/Intro/Intro';
import { NutrientsList } from 'components/NutrientsList';

import { Input } from 'components/FormFields/Input';
import { Button } from 'components/FormFields/Button';
import { SelectCustom } from 'components/FormFields/Select';
import { DatePickerCustom } from 'components/FormFields/DatePicker';
import { placeholders } from 'styles/utils/placeholders';

import {entryMeals} from '../mock/entryMeals';

import { Icons } from '../assets/icons';
import * as moment from 'moment';
import { CallToActionText } from 'components/CallToActionText';
import { NavLinks } from 'enums/NavLinks';

@observer
export class Entry extends React.Component {
  @observable
  public state: {
    selectMealsOption?: string|null;
    selectNutrientsOption?: string|null;
    selectedDate: any;
  } = {
    selectMealsOption: null,
    selectNutrientsOption: null,
    selectedDate: moment(),
  };

  public handleChangeMeals = (selectMealsOption: string) => {
    this.setState({ selectMealsOption });
  }

  public handleChangeNutrients = (selectNutrientsOption: string) => {
    this.setState({ selectNutrientsOption });
  }

  public handleChangeDate = (selectedDate: any) => {
    this.setState({ selectedDate });
  }

  public handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted:');
  }

  public render() {
    const { selectMealsOption, selectNutrientsOption } = this.state;

    return (
      <div>
        <Intro type="simple" title="Entry" />
        <NutrientsList carbs={50} proteins={20} fats={10} calories={1500} />

        <div className={styleContainer}>
          <form onSubmit={this.handleSubmit}>
            <div className={styleField}>
              <SelectCustom
                options={entryMeals}
                value={selectMealsOption}
                onChange={this.handleChangeMeals}
                icon={Icons.Meal}
                placeholder="Search meal"
              />
            </div>

            <div className={styleField}>
              <SelectCustom
                options={entryMeals}
                value={selectNutrientsOption}
                onChange={this.handleChangeNutrients}
                icon={Icons.Search}
                placeholder="Search nutrients"
              />
            </div>

            <div className={styleField}>
              <DatePickerCustom
                selected={this.state.selectedDate}
                onChange={this.handleChangeDate}
                showTimeSelect
                icon={Icons.Calendar}
                dateFormat="LLL"
                timeFormat="HH:mm"
              />
            </div>

            <div className={styleField}>
              <Input
                name="weight"
                id="weight"
                placeholder="Add Weight"
                unit="grams"
                icon={Icons.Scale}
              />
            </div>

            <div className={styleField}>
              <Button
                name="submit"
                id="submit"
                value="Add Entry"
              />
            </div>

          </form>
            <CallToActionText label="Missing an nutrient?" linkLabel="Add your own" link={NavLinks.NUTRIENTS} />
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
