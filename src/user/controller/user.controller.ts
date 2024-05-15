/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Controller,
    Post,
  } from '@nestjs/common';
import { UserCreateDto } from '../dto/user-create.dto';
import { CreateUserService } from '../use-case/create-user.service';

  
  // @Controller('articles')
  // est un décorateur qui permet de déclarer un controller
  // donc une classe qui va contenir des routes (url accessible)
  @Controller('users')
  export class UserController {
    // injection de dépendance
    // permet d'instancier la classe ArticleService
    // dans la propriété articleService
    constructor(private readonly CreateUserService: CreateUserService) {}
  
    
  
    @Post()
    // on utilise le décorateur @Body pour récupérer
    // les données du body de la requête
    // on valide les données du body de la requête
    // avec un DTO (Data Transfer Object)
    createArticle(@Body() data: UserCreateDto) {
      console.log(data);
      return this.CreateUserService.createUser(data);
    }
  }
  