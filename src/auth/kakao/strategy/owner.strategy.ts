import { OwnerService } from 'src/user/owner/owner.service';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-kakao';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProviderType } from 'src/user/entities/user.entity';

@Injectable()
export class KakaoOauthOwnerStrategy extends PassportStrategy(
  Strategy,
  'kakaoOwner',
) {
  constructor(
    configService: ConfigService,
    private readonly ownerService: OwnerService,
  ) {
    super({
      clientID: configService.get<string>('KAKAO_OAUTH_CLIENT_ID'),
      callbackURL: configService.get<string>('KAKAO_OAUTH_OWNER_CALLBACK_URL'),
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { id, username } = profile;
    let user = await this.ownerService.findOne(ProviderType.KAKAO, String(id));
    if (!user) {
      user = await this.ownerService.create({
        provider: ProviderType.KAKAO,
        providerId: String(id),
        nickname: String(username),
      });
    }
    return { userType: 'OWNER', nickname: user.nickname };
  }
}
