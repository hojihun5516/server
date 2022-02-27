import { ShopTable } from './entities/shop-table.entity';
import { UpdateShopTableDto } from './dto/update-shop-table.dto';
import { CreateShopTableDto } from './dto/create-shop-table.dto';
import { Shop } from 'src/shop/entities/shop.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { GetUser } from '../auth/decorators/get-user.decorators';
import { UserType } from '../user/constant/usertype';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Role } from '../auth/decorators/roles.decorator';
import { ShopTableService } from './shop-table.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import {
  Controller,
  Post,
  UseGuards,
  Body,
  Param,
  Get,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('table')
@ApiTags('Table')
export class ShopTableController {
  constructor(private readonly shopTableService: ShopTableService) {}

  @Post()
  @ApiBearerAuth('authorization')
  @Role(UserType.OWNER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  create(
    @GetUser() user: UserEntity,
    @Body() createShopTableDto: CreateShopTableDto,
  ) {
    const userId = user.id;
    return this.shopTableService.create(createShopTableDto, userId);
  }

  @Get('/:shopId')
  @ApiBearerAuth('authorization')
  @UseGuards(JwtAuthGuard)
  readAllEveryUser(@Param('shopId') shopId: Shop['id']) {
    return this.shopTableService.getAllTable(shopId);
  }

  @Put()
  @ApiBearerAuth('authorization')
  @Role(UserType.OWNER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  updateTableNumber(
    @GetUser() user: UserEntity,
    @Body() updateShopTableDto: UpdateShopTableDto,
  ) {
    const userId = user.id;
    return this.shopTableService.updateTableNumber(updateShopTableDto, userId);
  }

  // 사장님의 shop을 전부 가져와서 검사해야하나?
  @Delete('/:tableId')
  @ApiBearerAuth('authorization')
  @Role(UserType.OWNER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  deleteTable(@Param('tableId') tableId: ShopTable['id']) {
    return this.shopTableService.deleteTable(tableId);
  }
}
