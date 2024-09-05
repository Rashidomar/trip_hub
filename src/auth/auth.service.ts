import { Injectable } from '@nestjs/common';
import { userSignInDto } from 'src/DTO/User.dto';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(signInDto: userSignInDto) {
    const foundUser = await this.userService.findOne(signInDto.username);
    console.log(foundUser)
  }
}
