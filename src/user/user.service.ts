import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {

  private users: UserEntity[] = [
    {
      id: 1,
      name: 'Jaime',
      lastName: 'Rodriguez',
      email: 'Jaimito@gmail.com',
      phoneNumber: 3813352422,
      address: 'Rivadavia 538'
    },
    {
      id: 2,
      name: 'Mario',
      lastName: 'Sppin',
      email: 'SppMArio@gmail.com',
      phoneNumber: 3816849567,
      address: 'Avellaneda 1560'
    }
  ]

  getUsers(): UserEntity[] {
    return this.users
  }
}
