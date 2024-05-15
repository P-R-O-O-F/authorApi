/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetAllUserByCityService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}

    async getAllUsersByCity(city: string): Promise<User[]> {
        return this.userRepository.find({ where: { city } });
    }
}