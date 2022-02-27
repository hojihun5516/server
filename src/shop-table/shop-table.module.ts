import { ShopTableRepository } from './shop-table.repository';
import { ShopModule } from '../shop/shop.module';
import { ShopRepository } from '../shop/shop.repository';
import { OwnerRepository } from '../user/owner/owner.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { ShopTableController } from './shop-table.controller';
import { ShopTableService } from './shop-table.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      OwnerRepository,
      ShopRepository,
      ShopTableRepository,
    ]),
  ],
  controllers: [ShopTableController],
  providers: [ShopTableService],
})
export class TableModule {}
