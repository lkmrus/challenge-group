import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig } from 'mongoose';

export enum CompanyStatus {
  Main,
  Child,
}

export interface ICompany extends SchemaTimestampsConfig {
  deletedAt?: Date;
}

@Schema({ autoIndex: true })
export class CompanyModel implements ICompany {
  @Prop()
  title: string;
  @Prop()
  phone: string;
  @Prop({ enum: CompanyStatus, type: String })
  status?: string;
  @Prop()
  deletedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(CompanyModel);
export type CompanyDocument = CompanyModel & Document;
