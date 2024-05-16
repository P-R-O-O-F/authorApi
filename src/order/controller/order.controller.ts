/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
  } from '@nestjs/common';
import { 
OrderCreateDto } from '../dto/create-order.dto';
import { CreateOrderService } from '../use-case/create-order.service';
import { PayOrderService } from '../use-case/pay-order.service';
import { Order } from '../entity/order.entity';
import { Repository } from 'typeorm';

  
  // @Controller('articles')
  // est un décorateur qui permet de déclarer un controller
  // donc une classe qui va contenir des routes (url accessible)
  @Controller('orders')
  export class OrderController {
    // injection de dépendance
    // permet d'instancier la classe ArticleService
    // dans la propriété articleService
    constructor(private readonly CreateOrderService: CreateOrderService,
                private readonly PayorderService: PayOrderService
    ) {}
  
    
  
    @Post()
    createOrder(@Body() data: OrderCreateDto) {
        console.log(data);
      return this.CreateOrderService.createOrder(data);
    }

    @Patch('/pay/:id')
    payOrder(@Param('id', ParseIntPipe) id: number) {
        return this.PayorderService.payOrder(id);
    }

}