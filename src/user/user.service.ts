import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository, ReturnDocument } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async findAll():Promise<UserEntity[]> {
    return this.userRepo.find()
  }

  async findById(id: number):Promise<UserEntity | null> {
    return this.userRepo.findOneBy({id})
  }

  async findOne(username: string):Promise<UserEntity | null>{
    return this.userRepo.findOneBy({
      username:username
    })
  }

  createUser(userData) {
    const newUser = new UserEntity()
    newUser.username = userData.username
    newUser.email = userData.email
    newUser.password = userData.password
    const savedUser = this.userRepo.save(newUser)
    return savedUser;
    // const result = userData;
    // console.log(result);
    // return userData;
  }
}
