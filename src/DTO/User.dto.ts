import { IsEmail, IsNotEmpty, IsString, Length,} from 'class-validator';

export class userSignUpDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
 @Length(4,8)
  password: string;
}

export class userLogInDto {
  username: string;
  password: string;
}
