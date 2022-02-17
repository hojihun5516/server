import { UserEntity } from 'src/user/entities/user.entity';
import {
  HttpException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner } from './entities/owner.entity';

@EntityRepository(Owner)
export class OwnerRepository extends Repository<Owner> {
  async createOwner(ownerData: CreateOwnerDto): Promise<Owner> {
    try {
      const created_owner = this.create(ownerData);
      console.log('repo', created_owner);
      return await this.save(created_owner);
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }
  async findOneOwner(provider: string, providerId: string): Promise<Owner> {
    try {
      const user = await this.findOne({ provider, providerId });
      if (!user) {
        return null;
      }
      return user;
    } catch (e) {
      throw new ServiceUnavailableException('Server Error');
    }
  }
}
