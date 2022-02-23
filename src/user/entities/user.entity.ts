import { ProviderType } from './../constant/usertype';
import { Column } from 'typeorm';
import { UUIdEntity } from 'src/common/entities/common.entity';

export abstract class UserEntity extends UUIdEntity {
  @Column({
    unique: true,
    nullable: false,
  })
  providerId: string;

  @Column({
    type: 'enum',
    enum: ProviderType,
    default: ProviderType.KAKAO,
    nullable: false,
  })
  provider: string;

  @Column({
    nullable: false,
  })
  nickname: string;
}
