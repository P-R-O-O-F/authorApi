/* eslint-disable prettier/prettier */
//implement the update of the user password, the new password must be encrypted with the hashPassword method from the PasswordHasherService

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserPasswordDto } from '../dto/user-password-update.dto';
import { PasswordHasherService } from '../utils/hash-password.service';

@Injectable()
export class UpdateUserPasswordService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly passwordHasher: PasswordHasherService,
    ) {}

    async updateUserPassword(id: number, data: UpdateUserPasswordDto): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new Error('User not found');
        }
        data.password = await this.passwordHasher.hashPassword(data.password);
        await this.userRepository.update(id, data);
        return this.userRepository.findOne({ where: { id } });
    }
}
