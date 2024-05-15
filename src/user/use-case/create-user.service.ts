/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from '../dto/user-create.dto';
import { User } from '../entity/user.entity';
import { PasswordHasher } from '../utils/hash-password.service';

Injectable();
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly passwordHasher: PasswordHasher,
  ) {}
  async createUser(data: UserCreateDto) {
    try {
        data.password = await this.passwordHasher.hashPassword(data.password);
        return this.userRepository.save(data);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }
}
