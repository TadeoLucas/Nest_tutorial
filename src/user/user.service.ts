import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserI } from './user.interfase';


const userProtect = {
  _id: false,
  phoneNumber: false,
  address: false
}

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserI>) { }

  createUser(newUser: UserI) {
    try {
      const user = new this.userModel(newUser);
      return user.save();
    } catch (error) {
      console.log("🚀 ~ file: user.service.ts:31 ~ UserService ~ createUser ~ error", error)
      throw new HttpException('Can not create', 403)
    }
  }

  async getUsers() {
    const user = await this.userModel.find({}, userProtect).exec();
    if (!user || !user[0]) {
      throw new HttpException('Not found', 404)
    }
    return user
  }

  async getUser(id: number) {
    try {
      const user = await this.userModel.findOne({ id }, userProtect).exec();
      return user
    } catch (error) {
      console.log("🚀 ~ file: user.service.ts:35 ~ UserService ~ getUser ~ error", error)
      return error
    }
  }

  async removeUser(id: number) {
    try {
      const user = await this.userModel.deleteOne({ id }).exec();
      if (user.deletedCount === 0) {
        throw new HttpException('Not found', 404)
      }
      return user
    } catch (error) {
      console.log("🚀 ~ file: user.service.ts:48 ~ UserService ~ removeUser ~ error", error)
      return 'error'
    }
  }
}
