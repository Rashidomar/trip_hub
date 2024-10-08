import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthControler {
  constructor(private authService: AuthService) {}

  @Post('login')
  async logIn(@Body() userData) {
    return await this.authService.login(userData.username, userData.password);
  }
}
