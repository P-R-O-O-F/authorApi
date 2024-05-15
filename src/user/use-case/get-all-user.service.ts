/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class GetAllUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async getAllUser() {
    try {
      return this.userRepository.find();
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }
}
