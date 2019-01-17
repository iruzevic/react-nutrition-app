import { Collection } from 'datx';
import { observable, computed, action } from 'mobx';

import { Auth } from './models/Auth';
import { Redirect } from 'react-router-dom';
import { NavLinks } from 'enums/NavLinks';
import { login } from 'services/auth';

export class AuthStore extends Collection {
  public static types = [Auth];

  @observable
  public auth: boolean = false;

  @action
  public signIn(authData) {
    try {
      this.getLogin(authData);
    } catch {
      console.log('a');
    }
  }

  @action
  public signOut(cb) {
    this.auth = false;
    localStorage.removeItem('authToken');
    // cb.push(NavLinks.LOGIN);
  }

  @action
  public checkAuthToken() {
    return localStorage.getItem('authToken');
  }

  @observable
  public isAuth() {
    console.log(this.token, 'isAuth');

    if (this.checkAuthToken()) {
      return this.auth;
    }

    return this.auth;
  }

  @computed
  public get token() {
      return this.findAll(Auth);
  }

  public getLogin(authData) {
    login(authData).then((data) => {
      localStorage.setItem('authToken', data);
    })
    .catch((err) => {
      throw Error('error');
      console.log(err, 'error');
    });
  }
}
