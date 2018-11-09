import { Model, prop } from 'datx';

import { Model as ModelEnum } from 'enums/Model';
import { Person } from 'state/models/Person';

export class Pet extends Model {
  public static type = ModelEnum.PET;

  @prop
  public name: string;
  @prop
  public age: number;
  @prop.toOne(Person)
  public person: Person;
}
