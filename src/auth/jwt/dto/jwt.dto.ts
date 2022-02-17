import { IsNumber, IsOptional, IsString } from 'class-validator';

export class JwtUserDto implements Express.User {
  @IsString()
  readonly username: string;

  @IsString()
  readonly userType: string;
}
