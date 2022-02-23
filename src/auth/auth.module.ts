import { OwnerRepository } from './../user/owner/owner.repository';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from './guards/jwt.guard';
import { OwnerModule } from '../user/owner/owner.module';
import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtAuthStrategy } from './jwt.strategy';

@Module({
  imports: [
    OwnerModule,
    TypeOrmModule.forFeature([OwnerRepository]),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [JwtAuthGuard, JwtAuthStrategy, AuthService],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
