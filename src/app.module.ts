import { AuthModule } from './auth/auth.module';
import { OwnerModule } from './user/owner/owner.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    // UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.ENV_PATH,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('MYSQL_URL'),
        autoLoadEntities: true,
        port: configService.get<number>('MYSQL_PORT'),
        username: configService.get<string>('MYSQL_USERNAME'), //'root',
        password: configService.get<string>('MYSQL_PASSWORD'), //'test',
        database: configService.get<string>('MYSQL_DATABASE'),

        entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('MYSQL_DATABASE_SYNCHRONIZE'), // true,
        // ssl:
        //   configService.get<string>('NODE_ENV') === 'production'
        //     ? { rejectUnauthorized: false }
        //     : false,
      }),
      inject: [ConfigService],
    }),
    ShopModule,
    OwnerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
