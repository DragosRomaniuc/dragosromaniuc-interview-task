import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, default: uuidv4() })
  _id: string;

  @Prop({ type: String, unique: true, required: true })
  email: string;

  @Prop({ type: String, required: true })
  givenName: string;

  @Prop({ type: String, required: true })
  familyName: string;

  @Prop({ type: Date, default: Date.now() })
  created: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
