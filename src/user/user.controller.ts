import { Controller, Get } from '@nestjs/common';
import { UserEntity } from './user.entity';
import {UserService} from './user.service';

@Controller('user')
export class UserController {

  constructor(private UserService: UserService) { }

  @Get()
  getAll(): UserEntity[] {
    return this.UserService.getUsers()
  }
}
