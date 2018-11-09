import { Model, prop } from 'datx';

import { Model as ModelEnum } from 'enums/Model';

export class Person extends Model {
  public static type = ModelEnum.PERSON;

  @prop
  public firstName: string;
  @prop
  public lastName: string;
  @prop
  public age: number;
}
