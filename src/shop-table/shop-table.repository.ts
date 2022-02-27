import { ShopTable } from './entities/shop-table.entity';
import { PaginationParams } from '../common/types/pagination-params.type';
import { Owner } from '../user/owner/entities/owner.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  HttpException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository, Table } from 'typeorm';

@EntityRepository(ShopTable)
export class ShopTableRepository extends Repository<ShopTable> {
  constructor() {
    super();
  }
  async createTable(shop: Shop, tableNumber: number): Promise<ShopTable> {
    try {
      const createdTable = this.create({ tableNumber });
      createdTable.shop = shop;
      return await this.save(createdTable);
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }

  async getAllTableByShop(shop: Shop): Promise<ShopTable[]> {
    try {
      const readAllTable = this.find({
        where: { shop },
      });
      return readAllTable;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }

  async updateTable(shop: Shop, id: string, tableNumber: number) {
    try {
      const updatedTable = this.update({ id, shop }, { tableNumber });
      return updatedTable;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }

  async deleteTable(id: ShopTable['id']) {
    try {
      const deletedTable = this.delete({ id });
      return deletedTable;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }
}
