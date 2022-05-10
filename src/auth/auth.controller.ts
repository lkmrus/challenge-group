import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { IAuth } from './auth.model';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto): Promise<IAuth> {
    return;
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto): Promise<IAuth> {
    return;
  }
}
