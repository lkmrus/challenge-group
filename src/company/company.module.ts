import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModel, CompanySchema } from './company.model';
import { CompanyService } from './company.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CompanyModel.name,
        collection: 'Company',
        schema: CompanySchema,
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
