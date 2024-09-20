import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Configure ConfigModule to be global
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'apex@lord',
      database: 'user_management',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
