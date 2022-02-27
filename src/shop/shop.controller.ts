import { UserEntity } from 'src/user/entities/user.entity';
import { GetUser } from './../auth/decorators/get-user.decorators';
import { UpdateShopDto } from './dto/update-shop.dto';
import { PaginationParams } from './../common/types/pagination-params.type';
import { CreateShopDto } from './dto/create-shop.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserType } from './../user/constant/usertype';
import { RolesGuard } from './../auth/guards/roles.guard';
import { Role } from '../auth/decorators/roles.decorator';
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
  Query,
  Put,
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
  create(@GetUser() user: UserEntity, @Body() createshopDto: CreateShopDto) {
    const userId = user.id;
    return this.shopService.create(createshopDto, userId);
  }

  @Get()
  @ApiBearerAuth('authorization')
  @UseGuards(JwtAuthGuard)
  readAllEveryUser(@Query() paginationParams: PaginationParams) {
    return this.shopService.readAllEveryUser(paginationParams);
  }

  @Get('owner')
  @ApiBearerAuth('authorization')
  @Role(UserType.OWNER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  readAllByOwner(
    @GetUser() user: UserEntity,
    @Query() paginationParams: PaginationParams,
  ) {
    const userId = user.id;
    return this.shopService.readAllByOwner(paginationParams, userId);
  }

  @Put()
  @ApiBearerAuth('authorization')
  @Role(UserType.OWNER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  setAllUser(
    @GetUser() user: UserEntity,
    @Body() updateShopDto: UpdateShopDto,
  ) {
    const userId = user.id;
    return this.shopService.updateByOwner(updateShopDto, userId);
  }

  // @Param('id') id,
  @Delete('/:id')
  @ApiBearerAuth('authorization')
  @UseGuards(JwtAuthGuard)
  deleteShopByOwner(
    @Param('id') id: string,
    @GetUser() user: UserEntity,
  ): Promise<void> {
    const userId = user.id;
    this.shopService.deleteShopByOwner(id, userId);
    return;
  }

  // @Get()
  // @ApiBearerAuth('authorization')
  // @UseGuards(JwtAuthGuard)
  // readOneEveryUser(@Query() paginationParams: PaginationParams) {
  //   return this.shopService.readAllEveryUser(paginationParams);
  // }

  // @Get('/:id')
  // @ApiBearerAuth('authorization')
  // @UseGuards(JwtAuthGuard)
  // readOneEveryUser(@Param('id') shopId) {
  //   return this.shopService.readOneEveryUser(shopId);
  // }
}
