import { Shop } from 'src/shop/entities/shop.entity';
import { UUIdEntity } from 'src/common/entities/common.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('ShopTable')
export class ShopTable extends UUIdEntity {
  @Column({ type: 'int' })
  tableNumber!: number;

  @Column({ type: 'varchar', length: 500 })
  qrcodeUrl!: string;

  @ManyToOne((type) => Shop, (shop) => shop.tables)
  shop!: Shop;
}
