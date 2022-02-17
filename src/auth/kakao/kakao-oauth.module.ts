import { OwnerModule } from 'src/user/owner/owner.module';
import { Module } from '@nestjs/common';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { KakaoOauthController } from './kakao-oauth.controller';
import { KakaoOauthCustomerStrategy } from './strategy/customer.strategy';
import { KakaoOauthOwnerStrategy } from './strategy/owner.strategy';

@Module({
  imports: [OwnerModule, JwtAuthModule],
  controllers: [KakaoOauthController],
  providers: [KakaoOauthOwnerStrategy, KakaoOauthCustomerStrategy],
  exports: [KakaoOauthOwnerStrategy, KakaoOauthCustomerStrategy],
})
export class KakaoOauthModule {}
