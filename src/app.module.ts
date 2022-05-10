import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ServiceModule } from './service/service.module';
import configuration from './config/configuration';

@Module({
  imports: [
    AuthModule,
    CompanyModule,
    ServiceModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
