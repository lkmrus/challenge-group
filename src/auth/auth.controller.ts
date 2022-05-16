import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: AuthDto,
  ): Promise<Omit<Auth, 'passwordHash'> | null> {
    return this.authService.register(dto);
  }

  @HttpCode(200)
  @Post('login')
  async login(
    @Body() dto: AuthDto,
  ): Promise<Omit<Auth, 'passwordHash'> | null> {
    return this.authService.login(dto);
  }
}
