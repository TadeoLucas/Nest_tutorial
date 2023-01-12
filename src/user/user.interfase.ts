import { Document } from "mongoose";

export interface UserI extends Document {
  readonly id: number
  readonly name: string
  readonly lastName: string
  readonly email: string
  readonly phoneNumber: number
  readonly address: string
}