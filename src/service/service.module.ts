import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceService } from './service.service';
import { ServiceModel, ServiceSchema } from './service.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ServiceModel.name,
        collection: 'Service',
        schema: ServiceSchema,
      },
    ]),
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
