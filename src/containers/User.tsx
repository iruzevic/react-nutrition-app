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
export class User extends React.Component {
  public handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted:');
  }

  public render() {
    return (
      <div>
        <Intro type="simple" title="User" subtitle="details" />

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
                name="email"
                id="email"
                placeholder="Add email"
              />
            </div>

            <div className={styleField}>
              <Input
                name="email"
                id="email"
                placeholder="Add password"
              />
            </div>

            <div className={styleField}>
              <Button
                name="submit"
                id="submit"
                value="Update user details"
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
