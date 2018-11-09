import { Collection } from 'datx';

import { KeyValue } from './models/KeyValue';

export class AppData extends Collection {
  public static types = [KeyValue];

  public keys: Array<KeyValue>;
}
