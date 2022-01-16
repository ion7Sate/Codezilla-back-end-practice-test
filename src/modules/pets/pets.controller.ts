import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBreedDTO } from './dto/create-breed.dto';
import { PetsService } from './pets.service';
import {CreatePetDTO} from "./dto/create-pet.dto";
import {ObjectId} from "mongoose";

@Controller('pets')
@ApiTags('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Post('breed')
  async createBreed(@Body() body: CreateBreedDTO) {
    return await this.petsService.createBreed(body);
  }

  @Post('pet')
  async createPet(@Body() body: CreatePetDTO) {
    return await this.petsService.createPet(body);
  }

  @Get()
  async getPets() {
    return await this.petsService.getPets();
  }


  @Get('user/:id')
  async getPetsByUserId(@Param('id') id: string) {
    return await this.petsService.getPetsByUserId(id);
  }


  @Get('user/:id/:breed')
  async getPetsUserWithSpecifiedBreed(@Param('id') id: string, @Param('breed') breed: string) {
    return await this.petsService.getPetsUserWithSpecifiedBreed(id,breed);
  }
}
