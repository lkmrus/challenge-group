import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, SchemaTimestampsConfig } from 'mongoose';
import { ServiceModel } from '../service/service.model';

export enum CompanyStatus {
  Main,
  Child,
}

export interface ICompany extends SchemaTimestampsConfig {
  deletedAt?: Date;
}

@Schema({ autoIndex: true })
export class CompanyModel implements ICompany {
  @Prop({ type: [Types.ObjectId], ref: '_companyId' })
  services: ServiceModel[];
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
