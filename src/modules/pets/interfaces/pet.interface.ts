import { BreedTypesEnum } from '../../../common/constants/breed-types.enum';
import { User } from '../../../modules/users/interfaces/user.interface';
import { Breed } from './breed.interface';

export class Pet {
  _id: string;
  name: string;
  age: number;
  user: User;
  breed: Breed;
  created: Date;
  updated: Date;

  init(pet: any) {
    this._id = pet._id;
    this.name = pet.name;
    this.age = pet.age;
    this.user = pet.user;
    this.breed = pet.breed;
    this.created = pet.created;
    this.updated = pet.updated;
    return this;
  }
}
