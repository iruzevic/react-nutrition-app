import { Model, prop } from 'datx';

import { Model as ModelEnum } from 'enums/Model';

export class Auth extends Model {
  public static type = ModelEnum.AUTH;

  @prop
  public token: string|false;
}
