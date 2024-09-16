import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  signup(@Body() userData){
    

  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  findAll(@Req() req: Request) {
    console.log(req.user);
    return this.userService.findAll()
  }
}
