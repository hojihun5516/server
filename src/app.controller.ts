import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('healthCheck')
  healthCheck(): boolean {
    return true;
  }
  @Get('test')
  test(): string {
    return 'test success';
  }

  @Get('test2')
  test2(): string {
    return 'test2 success';
  }
}
