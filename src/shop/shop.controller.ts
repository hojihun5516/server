import { CreateShopDto } from './dto/create-shop.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ShopService } from './shop.service';

@ApiTags('Shop')
@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  @ApiBearerAuth('authorization')
  @Role(UserType.OWNER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  create(@Req() req, @Body() createshopDto: CreateShopDto) {
    const userId = req.user.id;
    return this.shopService.create(createshopDto, userId);
  }
}
