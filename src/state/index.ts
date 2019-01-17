import { DEV } from 'utils/environment';
import { AuthStore } from './AuthStore';

const appData = new AuthStore();

if (DEV) {
  window['appData'] = appData;
}

// tslint:disable-next-line
export default appData;
