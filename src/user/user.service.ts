// import { Injectable } from "@nestjs/common";
import { userSignUpDto } from "src/DTO/User.dto";


export type User = any;
export class UserService {

    private readonly users = [
    {
      userId: 1,
      username: 'john',
      email: 'john@mail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      email: 'maria@mail.com',
      password: 'guess',
    },
    ]

    async findOne(username: string) : Promise<User | undefined>  {
      const result = this.users.find((user) => user.username === username);
      return result
  }

    signup(signUpDto: userSignUpDto) {
        console.log(signUpDto);
        return ({
            userData: signUpDto
    })
  }
}
