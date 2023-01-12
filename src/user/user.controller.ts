import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe
} from '@nestjs/common';
import { UserI } from './user.interfase';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private UserService: UserService) { }

  @Get()
  async getAll() {
    return this.UserService.getUsers()
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.UserService.getUser(id)
  }

  @Post('create')
  async createUser(@Body() newUser: UserI) {
    return this.UserService.createUser(newUser)
  }

  @Delete('remove/:id')
  async removeUserById(@Param('id', ParseIntPipe) id: number) {
    return this.UserService.removeUser(id)
  }

}


/**
 * ParseIntPipe  => obliga a q el parametrop recivido sea un numero entero
 */