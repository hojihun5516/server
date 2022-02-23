import { UserType } from './../user/constant/usertype';
import { RolesGuard } from './../auth/guards/roles.guard';
import { Role } from './../auth/roles.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  @Role(UserType.OWNER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  create(@Body() something: any) {
    return 'this.shopService.create(something)';
  }
}
