import { Column } from 'typeorm';
import { UUIdEntity } from 'src/common/entities/common.entity';

export enum ProviderType {
  KAKAO = 'kakao',
}

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

  @Column({
    nullable: true,
  })
  birth: string;
}
