import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  lastName: String,
  email: String,
  phoneNumber: Number,
  address: String
});