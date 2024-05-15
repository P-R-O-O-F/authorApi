/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
import { UserCreateDto } from '../dto/user-create.dto';
import { CreateUserService } from '../use-case/create-user.service';
import { GetAllUserService } from '../use-case/get-all-user.service';
import { GetOneUserByIdService } from '../use-case/get-one-user-by-id.service';
import { GetAllUserByCityService } from '../use-case/get-all-user-by-city.service';
import { UpdateOneUserService } from '../use-case/update-one-user.service';
import { UpdateUserPasswordService } from '../use-case/update-user-password.service';


  
  // @Controller('articles')
  // est un décorateur qui permet de déclarer un controller
  // donc une classe qui va contenir des routes (url accessible)
  @Controller('users')
  export class UserController {
    // injection de dépendance
    // permet d'instancier la classe ArticleService
    // dans la propriété articleService
    constructor(private readonly CreateUserService: CreateUserService,
                private readonly getAllUserService: GetAllUserService,
                private readonly getOneUserByIdService: GetOneUserByIdService,
                private readonly getAllUserByCityService: GetAllUserByCityService,
                private readonly updateOneUserService: UpdateOneUserService,
                private readonly updateUserPasswordService: UpdateUserPasswordService
    ) {}
  
    
  
    @Post()
    // on utilise le décorateur @Body pour récupérer
    // les données du body de la requête
    // on valide les données du body de la requête
    // avec un DTO (Data Transfer Object)
    createArticle(@Body() data: UserCreateDto) {
      console.log(data);
      return this.CreateUserService.createUser(data);
    }

    @Get()
    getAllUser() {
      return this.getAllUserService.getAllUser();
    }

    @Get('/:id')
    getOneUserById(@Param('id', ParseIntPipe) id: number) {
      return this.getOneUserByIdService.getOneUserById(id);
    }

    @Get('/city/:city')
    getAllUserByCity(@Param('city') city: string) {
      return this.getAllUserByCityService.getAllUsersByCity(city);
    }

    @Put('/:id')
    updateOneUser(@Param('id', ParseIntPipe) id: number, @Body() data: UserCreateDto) {
      return this.updateOneUserService.updateOneUser(id, data);
    }

    @Put('/:id/password')
    updateUserPassword(@Param('id', ParseIntPipe) id: number, @Body() data: UserCreateDto) {
      return this.updateUserPasswordService.updateUserPassword(id, data);
    }



  }
  