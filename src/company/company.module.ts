import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModel, CompanySchema } from './company.model';
import { CompanyService } from './company.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CompanyModel.name,
        collection: 'Auth',
        schema: CompanySchema,
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService, ConfigService],
})
export class CompanyModule {}
