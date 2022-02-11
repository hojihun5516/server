import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Order } from '../order/order.entity';

@Entity('OWNER')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    name: 'NAME',
  })
  name: string;

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  //   @OneToMany(() => Order, (order) => order.user)
  //   orders: Order[];
}
