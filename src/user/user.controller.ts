import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private UserService: UserService) { }

  @Get()
  getAll(): UserEntity[] {
    return this.UserService.getUsers()
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): UserEntity {
    return this.UserService.getUser(id)
  }

  @Post()
  createUser(@Body() body: UserEntity): string {
    return this.UserService.createUser(body)
  }
}


/**
 * ParseIntPipe  => obliga a q el parametrop recivido sea un numero entero
 */