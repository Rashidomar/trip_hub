import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

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

    return {
      user: user,
    };
  }
}
