/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './controller/user.controller';
import { CreateUserService } from './use-case/create-user.service';
import { PasswordHasherService } from './utils/hash-password.service';
import { PasswordHasherServiceInterface } from './utils/PasswordHasherServiceInterface';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: CreateUserService,
      useFactory: (passwordHasherService: PasswordHasherServiceInterface) => {
        return new CreateUserService(passwordHasherService);
      },
      inject: [PasswordHasherService],
    },
    PasswordHasherService,  
  ],
})
export class UserModule {}
