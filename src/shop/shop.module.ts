import { ShopTable } from '../shop-table/entities/shop-table.entity';
import { ShopRepository } from './shop.repository';
import { OwnerRepository } from './../user/owner/owner.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([OwnerRepository, ShopRepository, ShopTable]),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
