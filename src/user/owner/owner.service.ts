import { InjectRepository } from '@nestjs/typeorm';
import { ProviderType } from './../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnerRepository } from './owner.repository';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return await this.ownerRepository.createOwner(createOwnerDto);
  }

  findAll() {
    return `This action returns all owner`;
  }

  async findOne(provider: string, providerId: string): Promise<Owner> {
    return await this.ownerRepository.findOneOwner(provider, providerId);
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
