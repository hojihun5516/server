import { UserType, ProviderType } from './../../user/constant/usertype';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({ description: 'oauth provider', example: ProviderType.KAKAO })
  readonly provider: string;

  @IsNumber()
  @ApiProperty({ description: 'oauth provider id', example: '12341231' })
  readonly providerId: string;

  @IsString()
  @ApiProperty({
    description: 'user type owner or customer',
    example: UserType.OWNER,
  })
  readonly userType: UserType;

  @IsString()
  @ApiProperty({ description: 'user nickname', example: '김아무개' })
  readonly nickname: string;
}
