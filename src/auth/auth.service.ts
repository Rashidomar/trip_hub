import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (!user) {
      return {
        messge: 'Username does not exist',
      };
    }
    if (user.password !== password) {
      return {
        messge: 'Incorrect Pasword',
      };
    }

    const token = await this.jwtService.signAsync({ sub: user.userId, username : user.username });

    return {
      user: user,
      token: token,
    };
  }
}
