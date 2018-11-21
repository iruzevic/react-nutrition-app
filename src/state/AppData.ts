import { Collection } from 'datx';
import { observable, computed, action } from 'mobx';

import { Auth } from './models/Auth';
import { Redirect } from 'react-router-dom';
import { NavLinks } from 'enums/NavLinks';

export class AppData extends Collection {
  public static types = [Auth];

  @observable
  public auth: boolean = false;

  @action
  public signIn() {
    this.auth = true;
    localStorage.setItem('authToken', 'sss');
  }

  @action
  public signOut() {
    localStorage.removeItem('authToken');
  }

  @action
  public checkAuthToken() {
    return localStorage.getItem('authToken');
  }

  @observable
  public isAuth() {
    return this.auth;
  }
}
