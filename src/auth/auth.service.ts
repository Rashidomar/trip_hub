import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { userSignInDto } from 'src/DTO/User.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    signInDto: userSignInDto,
  ): Promise<{ user: any; accessToken: string }> {
    const foundUser = await this.userService.findOne(signInDto.username);
    if (!foundUser) {
      throw new ForbiddenException('Username does not exist');
    }
    if (foundUser.password !== signInDto.password) {
      throw new UnauthorizedException('Incoorect Password');
    }
    const payLoad = { sub: foundUser.userId, username: foundUser.username };
    const accessToken = await this.jwtService.signAsync(payLoad, {
      secret: 'Your_Secret',
    });

    return {
      user: foundUser,
      accessToken: accessToken,
    };
  }
}
