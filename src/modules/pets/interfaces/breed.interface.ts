import { BreedTypesEnum } from 'src/common/constants/breed-types.enum';

export class Breed {
  _id: string;
  name: string;
  type: BreedTypesEnum;
  created: Date;
  updated: Date;

  init(breed: any) {
    this._id = breed._id;
    this.name = breed.name;
    this.type = breed.type;
    this.created = breed.created;
    this.updated = breed.updated;
    return this;
  }
}
