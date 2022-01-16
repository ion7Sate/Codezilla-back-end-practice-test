import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: CreateUserDTO) {
    return await this.usersService.createUser(body);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }


  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }
}
