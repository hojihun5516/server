import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOwnerDto {
  @IsString()
  readonly provider: string;

  @IsNumber()
  readonly providerId: string;

  @IsString()
  readonly nickname: string;
}
