import { Owner } from './../../user/owner/entities/owner.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { UUIdEntity } from 'src/common/entities/common.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('Shop')
export class Shop extends UUIdEntity {
  @Column({ type: 'varchar', length: 200 })
  title!: string;

  @Column({ type: 'char', length: 32 })
  contactNumber!: string;

  @Column({ type: 'char', length: 32 })
  businessNumber!: string;

  @Column({ type: 'varchar', length: 500 })
  address!: string;

  @Column({ type: 'varchar', length: 500 })
  detailAddress!: string;

  @Column({ type: 'varchar', length: 1000 })
  introduction!: string;

  @Column({ type: 'char', length: 32 })
  openTime!: string;

  @Column({ type: 'char', length: 32 })
  closeTime!: string;

  @ManyToOne((type) => Owner, (owner) => owner.shops)
  owner!: Owner;
}
