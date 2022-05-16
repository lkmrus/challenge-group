import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Service } from '../service/service.model';

export enum CompanyStatus {
  Main,
  Child,
}

@Schema({ autoIndex: true, timestamps: true })
export class Company {
  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Service' }],
  })
  services: Service[];
  @Prop()
  title: string;
  @Prop()
  phone: string;
  @Prop({ enum: CompanyStatus, type: String })
  status?: string;
  @Prop()
  deletedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
export type CompanyDocument = Company & Document;
