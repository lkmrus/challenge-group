import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthModel } from './auth.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: AuthDto,
  ): Promise<Omit<AuthModel, 'passwordHash'> | null> {
    return this.authService.register(dto);
  }

  @HttpCode(200)
  @Post('login')
  async login(
    @Body() dto: AuthDto,
  ): Promise<Omit<AuthModel, 'passwordHash'> | null> {
    return this.authService.login(dto);
  }
}
