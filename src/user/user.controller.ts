import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  signup(@Body() userData){
    return this.userService.createUser(userData)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  findAll(@Req() req: Request) {
    console.log(req.user);
    return this.userService.findAll()
  }
}
