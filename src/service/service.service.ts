import { Injectable } from '@nestjs/common';
import { ServiceDocument, Service } from './service.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindServiceDto } from './dto/find-service.dto';
import { ServiceDto } from './dto/service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(Service.name)
    private readonly serviceModel: Model<ServiceDocument>,
  ) {}

  async getServices({ limit, company }: FindServiceDto): Promise<Service[]> {
    const filter = company ? { company } : {};
    return this.serviceModel.find({ filter }).limit(limit || 0);
  }

  async createService({
    companyId,
    title,
    description,
  }: ServiceDto): Promise<Service> {
    const company = new Types.ObjectId(companyId);
    const model = new this.serviceModel({
      title,
      description,
      company,
    });
    // TODO push id to company
    return model.save();
  }

  async getById(id: string): Promise<Service | null> {
    return this.serviceModel.findById(id).populate('company').exec();
  }

  async delete(id: string): Promise<Service | null> {
    return this.serviceModel.findByIdAndDelete(id);
  }

  async updateById(id: string, data: ServiceDto): Promise<Service | null> {
    return this.serviceModel.findByIdAndUpdate(id, data);
  }
}
