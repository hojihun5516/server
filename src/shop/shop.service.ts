import { UpdateShopDto } from './dto/update-shop.dto';
import { PaginationParams } from './../common/types/pagination-params.type';
import { OwnerRepository } from './../user/owner/owner.repository';
import { UUIdEntity } from 'src/common/entities/common.entity';
import { Owner } from './../user/owner/entities/owner.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { CreateShopDto } from './dto/create-shop.dto';
import { ShopRepository } from './shop.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ShopService {
  constructor(
    private readonly shopRepository: ShopRepository,
    private readonly ownerRepository: OwnerRepository,
  ) {}

  async create(createShopDto: CreateShopDto, userId: string): Promise<Shop> {
    const owner = await this.ownerRepository.findOneOwnerById(userId);
    return await this.shopRepository.createShop(createShopDto, owner);
  }

  async readAllEveryUser(paginationParams: PaginationParams): Promise<Shop[]> {
    return await this.shopRepository.readAllEveryUser(paginationParams);
  }
  async readAllByOwner(
    paginationParams: PaginationParams,
    userId: string,
  ): Promise<Shop[]> {
    const owner = await this.ownerRepository.findOneOwnerById(userId);
    return await this.shopRepository.readAllByOwner(paginationParams, owner);
  }

  async updateByOwner(updateShopDto: UpdateShopDto, userId: string) {
    // ): Promise<Shop> {
    const owner = await this.ownerRepository.findOneOwnerById(userId);
    return await this.shopRepository.updateByOwner(updateShopDto, owner);
  }

  async deleteShopByOwner(shopId: string, userId: string) {
    const owner = await this.ownerRepository.findOneOwnerById(userId);
    return await this.shopRepository.deleteByOwner(shopId, owner);
  }

  //   findAll() {
  //     return `This action returns all owner`;
  //   }

  //   async findOne(provider: string, providerId: string): Promise<Owner> {
  //     return await this.ownerRepository.findOneOwner(provider, providerId);
  //   }

  //   update(id: number, updateOwnerDto: UpdateOwnerDto) {
  //     return `This action updates a #${id} owner`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} owner`;
  //   }
}
