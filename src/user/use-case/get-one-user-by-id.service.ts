/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class GetOneUserByIdService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    async getOneUserById(id: number)
        {
                try {
                return this.userRepository.findOne({ where: { id } });
                } catch (error) {
                console.log(error);
                throw new Error('Error while creating user');
                }
        }
}