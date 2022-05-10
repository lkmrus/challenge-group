import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTimestampsConfig, Document, Types } from 'mongoose';

export interface IAuth extends SchemaTimestampsConfig {
  email: string;
}

@Schema()
export class AuthModel implements IAuth {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  passwordHash: string;

  @Prop({ unique: true })
  email: string;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
export type AuthDocument = AuthModel & Document;
