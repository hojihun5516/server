import { UpdateShopDto } from './dto/update-shop.dto';
import { PaginationParams } from './../common/types/pagination-params.type';
import { Owner } from './../user/owner/entities/owner.entity';
import { CreateShopDto } from './dto/create-shop.dto';
import { Shop } from 'src/shop/entities/shop.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  HttpException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Shop)
export class ShopRepository extends Repository<Shop> {
  constructor() {
    super();
  }

  async createShop(shopData: CreateShopDto, owner: Owner): Promise<Shop> {
    try {
      const createdShop = this.create({ ...shopData });
      createdShop.owner = owner;
      return await this.save(createdShop);
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }
  async readAllEveryUser(paginationParams: PaginationParams): Promise<Shop[]> {
    const { offset, limit } = paginationParams;
    try {
      const readAllShop = this.find({
        order: { id: 'ASC' },
        skip: offset,
        take: limit,
      });
      return readAllShop;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }
  async readOneByIdAndOwner(id: string, owner: Owner): Promise<Shop> {
    try {
      const shop = this.findOne({
        where: { id, owner },
      });
      return shop;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }
  async readOneById(id: string): Promise<Shop> {
    try {
      const shop = this.findOne({
        where: { id },
      });
      return shop;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }

  async readAllByOwner(
    paginationParams: PaginationParams,
    owner: Owner,
  ): Promise<Shop[]> {
    const { offset, limit } = paginationParams;
    try {
      const readAllShop = this.find({
        where: { owner },
        order: { id: 'ASC' },
        skip: offset,
        take: limit,
      });
      return readAllShop;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }
  async updateByOwner(updateShopDto: UpdateShopDto, owner: Owner) {
    // ): Promise<Shop> {
    try {
      const { id, ...otherUpdateShopDto } = updateShopDto;
      const updatedShop = this.update({ owner, id }, { ...otherUpdateShopDto });
      return updatedShop;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }
  async deleteByOwner(id: string, owner: Owner) {
    try {
      const deleteShop = this.delete({ owner, id });
      return deleteShop;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }

  // async findOneOwner(provider: string, providerId: string): Promise<Owner> {
  //   try {
  //     const user = await this.findOne({ provider, providerId });
  //     if (!user) {
  //       return null;
  //     }
  //     return user;
  //   } catch (e) {
  //     throw new ServiceUnavailableException('Server Error');
  //   }
  // }
}
