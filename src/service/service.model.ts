import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig, Types } from 'mongoose';

export interface IService extends SchemaTimestampsConfig {
  deletedAt?: Date;
}

@Schema({ autoIndex: true })
export class ServiceModel implements IService {
  @Prop({ type: Types.ObjectId, ref: 'Company' })
  _companyId: Types.ObjectId;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  deletedAt?: Date;
}

export const ServiceSchema = SchemaFactory.createForClass(ServiceModel);
export type ServiceDocument = ServiceModel & Document;
