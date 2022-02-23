import { InjectRepository } from '@nestjs/typeorm';
import { OwnerRepository } from './../user/owner/owner.repository';
import { LoginDto } from './dto/login.dto';
import { UserType } from './../user/constant/usertype';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly ownerRepository: OwnerRepository,
  ) {}

  async login(loginDto: LoginDto) {
    const { provider, providerId, nickname, userType } = loginDto;

    if (userType == UserType.OWNER) {
      let owner = await this.ownerRepository.findOneOwner(provider, providerId);
      if (!owner) {
        owner = await this.ownerRepository.createOwner({
          provider,
          providerId,
          nickname,
        });
      }
      const payload: JwtPayload = { nickname, userType, id: owner.id };
      return {
        accessToken: 'Bearer ' + this.jwtService.sign(payload),
      };
    }
  }
}
