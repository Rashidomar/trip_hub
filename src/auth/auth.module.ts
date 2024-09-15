import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthControler } from './auth.Controller';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule, JwtModule.register({ secret: 'secret' })],
  providers: [AuthService, UserService, JwtStrategy],
  controllers: [AuthControler],
})
export class AuthModule {}
