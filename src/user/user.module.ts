/* eslint-disable prettier/prettier */
import { Get, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './controller/user.controller';
import { CreateUserService } from './use-case/create-user.service';
import { PasswordHasherService } from './utils/hash-password.service';
import { GetOneUserByIdService } from './use-case/get-one-user-by-id.service';
import { GetAllUserService } from './use-case/get-all-user.service';
import { GetAllUserByCityService } from './use-case/get-all-user-by-city.service';
import { UpdateOneUserService } from './use-case/update-one-user.service';
import { UpdateUserPasswordService } from './use-case/update-user-password.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    CreateUserService,
    /*{
      provide: CreateUserService,
      useFactory: (passwordHasherService: PasswordHasherServiceInterface) => {
        return new CreateUserService(passwordHasherService);
      },
      inject: [PasswordHasherService],
    },*/
    PasswordHasherService,
    GetOneUserByIdService,
    GetAllUserService,
    GetAllUserByCityService,
    UpdateOneUserService,
    UpdateUserPasswordService,
  ],
})
export class UserModule {}
