import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateShopTableDto {
  @IsString()
  @ApiProperty({ description: 'Table - id', example: '123-123123-1231' })
  readonly tableId: string;

  @IsNumber()
  @ApiProperty({ description: 'Table - number', example: 0 })
  readonly tableNumber: number;

  @IsString()
  @ApiProperty({ description: 'Shop - id', example: '123-123123-1231' })
  readonly shopId: string;

  // @IsString()
  // @ApiProperty({
  //   description: 'Table QrCode url',
  //   example:
  //     'https://chart.googleapis.com/chart?cht=qr&chl=tablepay-preparing&chs=180x180&choe=UTF-8&chld=L|2',
  // })
  // readonly qrcodeUrl: string;
}
