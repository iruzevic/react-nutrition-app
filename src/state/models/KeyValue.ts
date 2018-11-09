import { Model, prop } from 'datx';

import { Model as ModelEnum } from 'enums/Model';

export class KeyValue extends Model {
  public static type = ModelEnum.KEY_VALUE;
  public static idAttribute = ['key'];

  @prop
  public key: string;
  @prop
  public value: any;
}
