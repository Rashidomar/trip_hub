import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthControler } from './auth.Controller';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [AuthService, UserService],
  controllers: [AuthControler],
})
export class AuthModule {}
