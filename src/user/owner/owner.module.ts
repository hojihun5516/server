import { Owner } from './entities/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { OwnerRepository } from './owner.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerRepository])],
  controllers: [OwnerController],
  providers: [OwnerService],
  exports: [OwnerService],
})
export class OwnerModule {}
