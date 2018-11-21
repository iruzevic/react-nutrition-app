import * as React from 'react';
import { inject, observer } from 'mobx-react';

import {
  withRouter,
} from 'react-router-dom';

import { Intro } from '../components/Intro/Intro';
import { NutrientsList } from 'components/NutrientsList';
import { EntriesListType } from 'components/EntriesList/EntriesListType';
import { EntriesListItem } from 'components/EntriesList/EntriesListItem';
import { CallToActionText } from 'components/CallToActionText';

import { NavLinks } from 'enums/NavLinks';
import { AppData } from 'state/AppData';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    localStorage.setItem('authToken', 'aaa');
    // setTimeout(cb, 100);
  },
  signout(cb) {
    localStorage.removeItem('authToken');
    this.isAuthenticated = false;
    // setTimeout(cb, 100);
  },
};

// const AuthButton = withRouter(({ history }) => (
//   <button
//     onClick={() => {
//       fakeAuth.signout(() => history.push('/'));
//     }}
//   >
//     Sign out
//   </button>
// ));

@inject('state')
@observer
export class Dashboard extends React.Component <{
  state: AppData;
}> {
  public render() {
    return (
      <div>
        {this.props.state.auth}
        {/* <AuthButton /> */}
        <Intro type="simple" title="Dashboard" />
        <NutrientsList carbs={50} proteins={20} fats={10} calories={1500} />

        <EntriesListType icon="icon" label="Breakfast" meta={150} />
        <EntriesListItem label="Chicken" amount={250} calories={150} carbs={150} proteins={150} fats={150} />
        <EntriesListType icon="icon" label="Snack" meta={150} />
        <EntriesListType icon="icon" label="Lunch" meta={150} />
        <EntriesListType icon="icon" label="Snack" meta={150} />
        <EntriesListType icon="icon" label="Dinner" meta={150} />

        <CallToActionText
          label="Had something to eat?"
          linkLabel="Tell us what it was"
          link={NavLinks.ENTRY}
        />
      </div>
    );
  }
}
