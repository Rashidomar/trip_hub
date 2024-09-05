import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userSignInDto } from 'src/DTO/User.dto';
// import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signin')
  signIn(@Body() signInDto: userSignInDto) {
    // const result = this.userService.findOne(signInDto.username);
    // console.log(result)
    return this.authService.signIn(signInDto);
  }
}
