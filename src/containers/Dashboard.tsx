import * as React from 'react';

import { Intro } from '../components/Intro/Intro';
import { NutrientsList } from 'components/NutrientsList';
import { EntriesListType } from 'components/EntriesList/EntriesListType';
import { EntriesListItem } from 'components/EntriesList/EntriesListItem';
import { CallToActionText } from 'components/CallToActionText';

import { NavLinks } from 'enums/NavLinks';

export class Dashboard extends React.Component {
  public render() {
    return (
      <div>
        <Intro type="simple" title="Dashboard" />
        <NutrientsList carbs={50} proteins={20} fats={10} calories={1500} />

        <EntriesListType icon="icon" label="Breakfast" meta={150} />
        <EntriesListItem label="Chicken" amount={250} calories={150} carbs={150} proteins={150} fats={150} />
        <EntriesListType icon="icon" label="Snack" meta={150} />
        <EntriesListType icon="icon" label="Lunch" meta={150} />
        <EntriesListType icon="icon" label="Snack" meta={150} />
        <EntriesListType icon="icon" label="Dinner" meta={150} />
        <CallToActionText label="Had something to eat?" linkLabel="Tell us what it was" link={NavLinks.ENTRY} />
      </div>
    );
  }
}
