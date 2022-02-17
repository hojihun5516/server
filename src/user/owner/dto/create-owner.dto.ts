import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOwnerDto {
  @IsString()
  @ApiProperty({ description: 'oauth provider' })
  readonly provider: string;

  @IsNumber()
  @ApiProperty({ description: 'oauth provider id' })
  readonly providerId: string;

  @IsString()
  @ApiProperty({ description: 'user nickname' })
  readonly nickname: string;
}
