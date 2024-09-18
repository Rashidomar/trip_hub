import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }

  async findById(id: number): Promise<UserEntity | null> {
    return this.userRepo.findOneBy({ id });
  }

  async findOne(username: string): Promise<UserEntity | null> {
    return this.userRepo.findOneBy({
      username: username,
    });
  }

  async createUser(userDto): Promise<UserEntity | null> {
    const newUser = new UserEntity();
    newUser.username = userDto.username;
    newUser.email = userDto.email;
    newUser.password = userDto.password;
    const savedUser = this.userRepo.save(newUser);
    return savedUser;
  }

  async updateUser(userDto) {
    const findUser = await this.findById(userDto.id)
    findUser.username = userDto.username
    const updatedUser = await this.userRepo.save(findUser)
    return updatedUser
  }

  async deleteUser(id:number){
    const findUser = await this.findById(id)
    const deleteUser = await this.userRepo.remove(findUser)
    return deleteUser
  }
}
