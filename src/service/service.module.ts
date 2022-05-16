import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceService } from './service.service';
import { Service, ServiceSchema } from './service.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Service.name,
        collection: Service.name,
        schema: ServiceSchema,
      },
    ]),
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
