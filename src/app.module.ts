import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [AuthModule, CompanyModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
