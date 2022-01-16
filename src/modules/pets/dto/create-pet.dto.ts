import { ApiProperty } from '@nestjs/swagger';
import {
  IsMongoId,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePetDTO {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @ApiProperty()
  @IsPositive()
  age: number;

  @ApiProperty()
  @IsMongoId()
  breedId: string;

  @ApiProperty()
  @IsMongoId()
  userId: string;
}
