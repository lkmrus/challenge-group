import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './company.model';
import { CompanyService } from './company.service';
import { Service, ServiceSchema } from '../service/service.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Company.name,
        collection: Company.name,
        schema: CompanySchema,
      },
      {
        name: Service.name,
        collection: Service.name,
        schema: ServiceSchema,
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
