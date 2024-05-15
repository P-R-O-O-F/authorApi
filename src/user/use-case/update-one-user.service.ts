/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from '../dto/user-update.dto';
import { PasswordHasherService } from '../utils/hash-password.service';
@Injectable()
export class UpdateOneUserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly passwordHasher: PasswordHasherService, // inject PasswordHasher
    ) {}

    async updateOneUser(id: number, data: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (id === undefined || id === null) {
            throw new Error('Invalid user ID');
        }
        if (!user) {
            throw new Error('User not found');
        }
        if (data.password) {
            data.password = await this.passwordHasher.hashPassword(data.password);
        }
        await this.userRepository.update(id, data);
        return this.userRepository.findOne({ where: { id } });
    }
}