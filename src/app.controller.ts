import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('System')
  @Get('healthcheck')
  healthcheck(): string {
    return 'success';
  }
}
