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
    UseGuards,
  } from '@nestjs/common';
import { 
OrderCreateDto } from '../dto/create-order.dto';
import { CreateOrderService } from '../use-case/create-order.service';
import { PayOrderService } from '../use-case/pay-order.service';
import { SetAdressOrderService } from '../use-case/set-adress-order.service';
import { Order } from '../entity/order.entity';
import { Repository } from 'typeorm';
import { AuthGuard } from 'src/auth/use-case/auth-guard.service';
import { JwtService } from '@nestjs/jwt';

  
  // @Controller('articles')
  // est un décorateur qui permet de déclarer un controller
  // donc une classe qui va contenir des routes (url accessible)
  @Controller('orders')
  export class OrderController {
    // injection de dépendance
    // permet d'instancier la classe ArticleService
    // dans la propriété articleService
    constructor(private readonly CreateOrderService: CreateOrderService,
                private readonly PayorderService: PayOrderService,
                private readonly SetAdressOrderService: SetAdressOrderService
    ) {}
  
    
  
    @Post()
    @UseGuards(AuthGuard)
    createOrder(@Body() data: OrderCreateDto) {
        console.log(data);
      return this.CreateOrderService.createOrder(data);
    }

    @Patch('/pay/:id')
    payOrder(@Param('id', ParseIntPipe) id: number) {
        return this.PayorderService.payOrder(id);
    }

    @Patch('/:id/set-adress')
    adressSet(@Param('id', ParseIntPipe) id: number, @Body() data) {
        return this.SetAdressOrderService.adressSet(id, data);
    }

    @Patch('/:id/set-invoice-adress')
    setInvoiceAdress(@Param('id', ParseIntPipe) id: number, @Body() data) {
        return this.SetAdressOrderService.setInvoiceAdress(id, data);
    }
}