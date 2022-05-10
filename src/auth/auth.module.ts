import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModel, AuthSchema } from './auth.model';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      {
        name: AuthModel.name,
        collection: 'Auth',
        schema: AuthSchema,
      },
    ]),
  ],
  providers: [AuthService, ConfigService],
})
export class AuthModule {}
