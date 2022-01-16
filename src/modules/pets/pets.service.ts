import {BadRequestException, HttpException, ImATeapotException, Injectable, Logger} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model, ObjectId} from 'mongoose';
import { CreateBreedDTO } from './dto/create-breed.dto';
import { CreatePetDTO } from './dto/create-pet.dto';
import { Breed } from './interfaces/breed.interface';
import { Pet } from './interfaces/pet.interface';
import * as mongoose from "mongoose";


@Injectable()
export class PetsService {
  async getBreedById(id: string) {
    const breed = await this.breedsModel
      .findOne({ _id: id })
      .catch(err =>
        this.logger.error(JSON.stringify(err), null, 'getBreedById'),
      );
    if (!breed) {
      throw new BadRequestException(`Breed with id: ${id} not found!`);
    }
    return new Breed().init(breed);
  }

  async createBreed(body: CreateBreedDTO) {
    const breed = await this.breedsModel.create(body);
    return new Breed().init(breed);
  }

  async createPet(body: CreatePetDTO) {
    const pet = await this.petsModel.create(body);
    return new Pet().init(pet);
  }

  async getPets() {
    const pets = await this.petsModel
        .find()
        .catch(err => this.logger.error(JSON.stringify(err), null, 'getPets'));
    if (!pets) {
      throw new ImATeapotException('Something went wrong!');
    }

   return  pets.map(pets => new Pet().init(pets));
  }

  async getPetsByUserId(id: string) {
    const pets = await this.petsModel
        .find({userId: new mongoose.Types.ObjectId(id)})
        .catch(err =>
            this.logger.error(JSON.stringify(err), null, 'getPetsByUserId'),
        );
    if (!pets) {
      throw new BadRequestException(` User with  id: ${id} has no registered pets!`);
    }
    return  pets.map(pets => new Pet().init(pets));
  }
   //userID for test : 609bf5e745fe3f2a503efb8b
   //breedId for test : 609ceb13396af029dc78a822
  async getPetsUserWithSpecifiedBreed(id: string,breed: string) {
    const pets = await this.petsModel
        .find({userId: new mongoose.Types.ObjectId(id),breedId: new mongoose.Types.ObjectId(breed),age: { $gt: 2}})
        .sort({ age: -1 })
        .catch(err =>
            this.logger.error(JSON.stringify(err), null, 'getPetsUserWithSpecifiedBreed'),
        );
    if (!pets) {
      throw new BadRequestException(` User with  id: ${id},  has no registered pets with this breed!`);
    }
    return  pets.map(pets => new Pet().init(pets));
  }


  private logger: Logger;
  constructor(
    @InjectModel('pets')
    private readonly petsModel: Model<any>,
    @InjectModel('breeds')
    private readonly breedsModel: Model<any>,
  ) {
    this.logger = new Logger();
  }
}
