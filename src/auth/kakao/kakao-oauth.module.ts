import { Module } from '@nestjs/common';
// import { UsersModule } from '../../users/users.module';
import { JwtAuthModule } from '../jwt/jwt-auth.module';
import { KakaoOauthController } from './kakao-oauth.controller';
import { KakaoOauthCustomerStrategy } from './strategy/customer.strategy';
import { KakaoOauthOwnerStrategy } from './strategy/owner.strategy';

@Module({
  imports: [JwtAuthModule],
  // imports: [UsersModule, JwtAuthModule],
  controllers: [KakaoOauthController],
  providers: [KakaoOauthOwnerStrategy, KakaoOauthCustomerStrategy],
})
export class KakaoOauthModule {}
