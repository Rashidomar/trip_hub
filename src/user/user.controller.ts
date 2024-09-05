import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userSignUpDto } from 'src/DTO/User.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  getAllUsers() {
    return 'All users';
  }
 
  @Post('signup')
  userSignUp(@Body() signUpDto: userSignUpDto) {
    return this.userService.signup(signUpDto);
  }
}
