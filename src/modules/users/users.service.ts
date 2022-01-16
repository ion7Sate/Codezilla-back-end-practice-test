import {
  BadGatewayException,
  BadRequestException,
  ImATeapotException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  async getUsers() {
    const users = await this.usersModel
      .find()
      .catch(err => this.logger.error(JSON.stringify(err), null, 'getUsers'));
    if (!users) {
      throw new ImATeapotException('Something went wrong!');
    }
    return users.map(user => new User().init(user));
  }
  async getUserById(id: string) {
    const user = await this.usersModel
      .findOne({ _id: id })
      .catch(err =>
        this.logger.error(JSON.stringify(err), null, 'getUserById'),
      );
    if (!user) {
      throw new BadRequestException(`User with id: ${id} not found!`);
    }
    return new User().init(user);
  }
  async createUser(data: CreateUserDTO) {
    const user = await this.usersModel.create(data);
    return new User().init(user);
  }

  private logger: Logger;
  constructor(
    @InjectModel('users')
    private readonly usersModel: Model<any>,
  ) {
    this.logger = new Logger();
  }
}
