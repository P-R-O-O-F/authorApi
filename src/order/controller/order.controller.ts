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
import { 
OrderCreateDto } from '../dto/create-order.dto';
import { CreateOrderService } from '../use-case/create-order.service';

  
  // @Controller('articles')
  // est un décorateur qui permet de déclarer un controller
  // donc une classe qui va contenir des routes (url accessible)
  @Controller('orders')
  export class OrderController {
    // injection de dépendance
    // permet d'instancier la classe ArticleService
    // dans la propriété articleService
    constructor(private readonly CreateOrderService: CreateOrderService
    ) {}
  
    
  
    @Post()
    createOrder(@Body() data: OrderCreateDto) {
        console.log(data);
      return this.CreateOrderService.createOrder(data);
    }

}