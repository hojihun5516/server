import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { KakaoOauthGuard } from './kakao-oauth.guard';
import { JwtAuthService } from '../jwt/jwt-auth.service';
// import { SESSION_COOKIE_KEY } from 'src/server/config/constants';

@Controller('auth/kakao')
export class KakaoOauthController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @Get()
  @UseGuards(KakaoOauthGuard)
  async KakaoAuth(@Req() _req) {
    // Guard redirects
  }

  @Get('redirect')
  @UseGuards(KakaoOauthGuard)
  async kakaoAuthRedirect(@Req() req: Request, @Res() res: Response) {
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
