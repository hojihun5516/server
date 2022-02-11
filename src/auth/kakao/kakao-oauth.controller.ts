import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { KakaoOwnerOauthGuard } from './guard/owner.guard';
import { KakaoCustomerOauthGuard } from './guard/customer.guard';
import { JwtAuthService } from '../jwt/jwt-auth.service';
// import { SESSION_COOKIE_KEY } from 'src/server/config/constants';

@Controller('auth/kakao')
export class KakaoOauthController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @Get('customer')
  @UseGuards(KakaoCustomerOauthGuard)
  async KakaoCustomerAuth(@Req() _req) {
    // Guard redirects
  }

  @Get('owner')
  @UseGuards(KakaoCustomerOauthGuard)
  async KakaoOwnerAuth(@Req() _req) {
    // Guard redirects
  }

  @Get('customer/redirect')
  @UseGuards(KakaoCustomerOauthGuard)
  async kakaoCustomerAuthRedirect(@Req() req: Request, @Res() res: Response) {
    console.log('SUCCESS customer');
    // console.log(req);
    // const { accessToken } = this.jwtAuthService.login(req.user);
    // res.cookie(SESSION_COOKIE_KEY, accessToken, {
    //   httpOnly: true,
    //   sameSite: 'strict',
    // });
    return res.redirect('/profile');
  }
  @Get('owner/redirect')
  @UseGuards(KakaoCustomerOauthGuard)
  async kakaoOwnerAuthRedirect(@Req() req: Request, @Res() res: Response) {
    console.log('SUCCESS');
    // console.log(req);
    // const { accessToken } = this.jwtAuthService.login(req.user);
    // res.cookie(SESSION_COOKIE_KEY, accessToken, {
    //   httpOnly: true,
    //   sameSite: 'strict',
    // });
    return res.redirect('/profile');
  }
}
