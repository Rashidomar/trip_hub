import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @Length(4, 8)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(4, 8)
  @IsNotEmpty()
  password: string;
}
