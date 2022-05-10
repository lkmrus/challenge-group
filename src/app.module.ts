import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ServiceModule } from './service/service.module';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './connections/mongo.connection';

@Module({
  imports: [
    AuthModule,
    CompanyModule,
    ServiceModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      // import module
      imports: [ConfigModule],
      // dependency for userFactory
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
