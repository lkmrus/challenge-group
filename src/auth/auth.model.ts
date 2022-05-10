import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTimestampsConfig, Document } from 'mongoose';

export interface IAuth extends SchemaTimestampsConfig {
  email: string;
}

@Schema({ autoIndex: true })
export class AuthModel implements IAuth {
  @Prop()
  passwordHash: string;

  @Prop({ unique: true })
  email: string;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
export type AuthDocument = AuthModel & Document;
