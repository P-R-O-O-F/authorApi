import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from './auth-guard.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async signIn(
        username: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        
        const user = await this.userRepository.findOne({ where: { username } });
        if (user) {
            const isPasswordValid = await bcrypt.compare(pass, user.password); 
            if (isPasswordValid) {
                const payload = { username: user.username, sub: user.id };
                return {
                    access_token: this.jwtService.sign(payload, {privateKey: 'test'}),
                };
            }
        }
        return null;
    }
}