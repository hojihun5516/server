import { JwtUserDto } from './dto/jwt.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  login(user) {
    const payload: JwtPayload = {
      nickname: user.nickname,
      userType: user.userType,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
  // login() {
  //   const payload: JwtPayload = { username: 'username', sub: 1 };
  //   return {
  //     accessToken: this.jwtService.sign(payload),
  //   };
  // }

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }
}
