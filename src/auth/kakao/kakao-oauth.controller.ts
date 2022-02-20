import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { KakaoOwnerOauthGuard } from './guard/owner.guard';
import { KakaoCustomerOauthGuard } from './guard/customer.guard';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { ConfigService } from '@nestjs/config';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
// import { SESSION_COOKIE_KEY } from 'src/server/config/constants';

@ApiTags('카카오 로그인')
@Controller('auth/kakao')
export class KakaoOauthController {
  constructor(
    private readonly jwtAuthService: JwtAuthService,
    private readonly configService: ConfigService,
  ) {}

  // @Get('customer')
  // @UseGuards(KakaoCustomerOauthGuard)
  // async KakaoCustomerAuth(@Req() _req) {
  //   // Guard redirects
  // }

  @Get('owner')
  @UseGuards(KakaoOwnerOauthGuard)
  async KakaoOwnerAuth(@Req() _req) {
    // Guard redirects
    console.log('OWNER CONTROLLER');
  }

  // @Get('redirect')

  // @Get('redirect/customer')
  // @UseGuards(KakaoCustomerOauthGuard)
  // async kakaoCustomerAuthRedirect(@Req() req: Request, @Res() res: Response) {
  //   const user = req.user;
  //   const { accessToken } = this.jwtAuthService.login(user);

  //   res.cookie(
  //     this.configService.get<string>('SESSION_COOKIE_KEY'),
  //     accessToken,
  //     {
  //       httpOnly: true,
  //       sameSite: 'strict',
  //     },
  //   );
  //   return 'AAAAAAAA';
  //   // return res.redirect('/profile');
  // }

  @Get('redirect/owner')
  @ApiOperation({
    summary: 'redirect url after kakao login',
    description: 'kakao 로그인 후 리다이렉트되는 url',
  })
  @ApiCreatedResponse({ description: 'jwt 쿠키생성 및 쿠키 심음' })
  @UseGuards(KakaoOwnerOauthGuard)
  async kakaoOwnerAuthRedirect(@Req() req: Request, @Res() res: Response) {
    console.log(req.user);
    const { accessToken } = this.jwtAuthService.login(req.user);
    res.cookie(this.configService.get<string>('JWT_COOKIE_KEY'), accessToken, {
      httpOnly: true,
      // sameSite: 'strict',
    });
    console.log(accessToken);
    return res.redirect('/profile');
    // return res.redirect('/profile');
  }
}
