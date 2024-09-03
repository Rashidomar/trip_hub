import { Body, Controller, Get,  Post } from '@nestjs/common';
import { userService } from './user.service';
import { userSignUpDto } from 'src/DTO/User.dto';

@Controller('users')
export class userController {
    constructor(private userService: userService){}
    
  @Get('all')
  getAllUsers() {
    return 'All users';
  }

  @Post('signup')
  userSignUp(@Body() signUpDto: userSignUpDto) {
    return this.userService.signup(signUpDto)
  }
}
