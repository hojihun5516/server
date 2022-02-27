import { UpdateShopTableDto } from './dto/update-shop-table.dto';
import { CreateShopTableDto } from './dto/create-shop-table.dto';
import { ShopTable } from './entities/shop-table.entity';
import { ShopRepository } from '../shop/shop.repository';
import { UserEntity } from 'src/user/entities/user.entity';
import { OwnerRepository } from '../user/owner/owner.repository';
import { ShopTableRepository } from './shop-table.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ShopTableService {
  constructor(
    private readonly shopTableRepository: ShopTableRepository,
    private readonly ownerRepository: OwnerRepository,
    private readonly shopRepository: ShopRepository,
  ) {}

  async create(
    createShopTableDto: CreateShopTableDto,
    userId: string,
  ): Promise<ShopTable> {
    const { shopId, tableNumber } = createShopTableDto;
    const owner = await this.ownerRepository.findOneOwnerById(userId);
    const shop = await this.shopRepository.readOneByIdAndOwner(shopId, owner);
    if (!shop) {
      throw new NotFoundException('Not found shop');
    }
    await this.shopTableRepository.createTable(shop, tableNumber);
    return;
  }

  async getAllTable(shopId: string): Promise<ShopTable[]> {
    const shop = await this.shopRepository.readOneById(shopId);
    return await this.shopTableRepository.getAllTableByShop(shop);
  }
  async updateTableNumber(
    updateShopTableDto: UpdateShopTableDto,
    userId: string,
  ) {
    const { shopId, tableId, tableNumber } = updateShopTableDto;
    const owner = await this.ownerRepository.findOneOwnerById(userId);
    const shop = await this.shopRepository.readOneByIdAndOwner(shopId, owner);
    if (!shop) {
      throw new NotFoundException('Not found shop');
    }
    return await this.shopTableRepository.updateTable(
      shop,
      tableId,
      tableNumber,
    );
  }
  async deleteTable(tableId: ShopTable['id']) {
    return await this.shopTableRepository.deleteTable(tableId);
  }
}
