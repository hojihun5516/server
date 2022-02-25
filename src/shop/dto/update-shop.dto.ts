import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { exhaustMap } from 'rxjs';

export class UpdateShopDto {
  @IsString()
  @ApiProperty({
    description: 'shop id - 변경불가',
    example: '123-1231-121311123',
  })
  readonly id: string;

  @IsString()
  @ApiProperty({ description: 'shop title', example: '순살만공격' })
  readonly title?: string;

  @IsString()
  @ApiProperty({ description: 'shop contact number', example: '02-1234-1234' })
  readonly contactNumber?: string;

  @IsString()
  @ApiProperty({ description: 'shop business number', example: '123-12-12345' })
  readonly businessNumber?: string;

  @IsString()
  @ApiProperty({
    description: 'shop short address',
    example: '경기도 남양주시 도농로12',
  })
  readonly address?: string;

  @IsString()
  @ApiProperty({
    description: 'shop detail address',
    example: '첨단타워 1층 104호',
  })
  readonly detailAddress?: string;

  @IsString()
  @ApiProperty({
    description: 'shop introduction',
    example: '안녕하세요 우리가게는 ~~입니다',
  })
  readonly introduction?: string;

  @IsString()
  @ApiProperty({ description: 'shop opentime', example: '09:00' })
  readonly openTime?: string;

  @IsString()
  @ApiProperty({ description: 'shop closetime', example: '20:00' })
  readonly closeTime?: string;
}
