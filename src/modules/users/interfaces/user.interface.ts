export class User {
  _id: string;
  name: string;
  age: number;
  phoneNumber: string;
  profilePicture: string;
  pets: [];
  created: Date;
  updated: Date;

  init(user: any) {
    this._id = user._id;
    this.name = user.name;
    this.age = user.age;
    this.phoneNumber = user.phoneNumber;
    this.profilePicture = user.profilePicture;
    this.pets = user.pets;
    this.created = user.created;
    this.updated = user.updated;
    return this;
  }
}
