import { Shop } from 'src/shop/entities/shop.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  PrimaryColumn,
  Generated,
} from 'typeorm';
// import { Order } from '../order/order.entity';

@Entity('Owner')
export class Owner extends UserEntity {
  @OneToMany(() => Shop, (shop) => shop.owner)
  shops: Shop[];
}
