import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHost(): string {
    return this.configService.get<string>('http.host') || '';
  }

  getPort(): number {
    return this.configService.get<number>('http.port') || 3000;
  }
}
