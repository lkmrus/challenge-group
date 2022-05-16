import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Company } from '../company/company.model';

@Schema({ autoIndex: true, timestamps: true })
export class Service {
  @Prop({
    type: Types.ObjectId,
    ref: 'Company',
  })
  company: Company;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  deletedAt?: Date;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
export type ServiceDocument = Service & Document;
