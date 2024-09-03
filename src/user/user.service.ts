import { userSignUpDto } from "src/DTO/User.dto";

export class userService {
  signup(signUpDto: userSignUpDto) {
    console.log(signUpDto);
    return ({
        userData: signUpDto
    })
  }
}
