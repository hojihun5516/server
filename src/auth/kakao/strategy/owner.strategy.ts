import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-kakao';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { UsersService } from '../../users/users.service';

@Injectable()
export class KakaoOauthOwnerStrategy extends PassportStrategy(
  Strategy,
  'kakaoOwner',
) {
  constructor(
    configService: ConfigService,
    // private readonly usersService: UsersService,
  ) {
    super({
      clientID: configService.get<string>('KAKAO_OAUTH_CLIENT_ID'),
      callbackURL: configService.get<string>('KAKAO_OAUTH_CALLBACK_URL'),
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { id, name, emails } = profile;
    console.log(profile);

    // let user = await this.usersService.findOne({
    //   where: { provider: 'kakao', providerId: id },
    // });
    // if (!user) {
    //   user = await this.usersService.create({
    //     provider: 'kakao',
    //     providerId: id,
    //     name: name.givenName,
    //     username: emails[0].value,
    //   });
    // }
    const user = { id: '임시', name: '임시이름', emails: '임시이메일' };

    return user;
  }
}
