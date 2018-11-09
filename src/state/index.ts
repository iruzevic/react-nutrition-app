import { DEV } from 'utils/environment';
import { AppData } from './AppData';

const appData = new AppData();

if (DEV) {
  window['appData'] = appData;
}

// tslint:disable-next-line
export default appData;
