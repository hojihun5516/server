import { UserType } from './../../user/constant/usertype';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({ description: 'oauth provider' })
  readonly provider: string;

  @IsNumber()
  @ApiProperty({ description: 'oauth provider id' })
  readonly providerId: string;

  @IsString()
  @ApiProperty({ description: 'user type owner or customer' })
  readonly userType: UserType;

  @IsString()
  @ApiProperty({ description: 'user nickname' })
  readonly nickname: string;
}
