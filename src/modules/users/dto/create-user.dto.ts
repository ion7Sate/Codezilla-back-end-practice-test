import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @ApiProperty()
  @IsNumber()
  @Min(18)
  @Max(65)
  age: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  profilePicture: string;
}
