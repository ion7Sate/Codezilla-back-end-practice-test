import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength, MinLength } from 'class-validator';
import { BreedTypesEnum } from 'src/common/constants/breed-types.enum';

export class CreateBreedDTO {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @ApiProperty()
  @IsEnum(BreedTypesEnum)
  type: BreedTypesEnum;
}
