import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './auth.model';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Auth.name,
        collection: Auth.name,
        schema: AuthSchema,
      },
    ]),
  ],
  providers: [AuthService, ConfigService],
})
export class AuthModule {}
