import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthControler } from './auth.Controller';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({ secret: 'secret' }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [AuthService, UserService, JwtStrategy],
  controllers: [AuthControler],
})
export class AuthModule {}
