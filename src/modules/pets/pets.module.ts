import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BreedsSchema } from '../../schemas/breeds.schema';
import { PetsSchema } from '../../schemas/pets.schema';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import {UsersSchema} from "../../schemas/users.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'pets', schema: PetsSchema },
      { name: 'breeds', schema: BreedsSchema },
      { name: 'users', schema: UsersSchema },
    ]),
  ],
  controllers: [PetsController],
  providers: [PetsService],
  exports: [PetsService],
})
export class PetsModule {}
