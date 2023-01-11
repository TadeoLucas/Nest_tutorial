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

  createUser(body: UserEntity): string {
    try{
      this.users.push(body)
      return 'success'
    }catch(error){
      console.log("🚀 ~ file: user.service.ts:31 ~ UserService ~ createUser ~ error", error)
      return 'error'
    }
  }

  getUsers(): UserEntity[] {
    return this.users
  }

  getUser(id: number): UserEntity {
    return this.users.find(user => user.id == id)
  }
}
