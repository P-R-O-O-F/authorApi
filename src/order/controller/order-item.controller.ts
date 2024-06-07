/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OrderCreateDto } from '../dto/create-order.dto';
import { CreateOrderItemService } from '../use-case/create-order-item.service';
import { PayOrderService } from '../use-case/pay-order.service';
import { SetAdressOrderService } from '../use-case/set-adress-order.service';
import { Order } from '../entity/order.entity';
import { Repository } from 'typeorm';
import { AuthGuard } from 'src/auth/use-case/auth-guard.service';
import { JwtService } from '@nestjs/jwt';
import { OrderItemCreateDto } from '../dto/create-order-item.dto';

// @Controller('articles')
// est un décorateur qui permet de déclarer un controller
// donc une classe qui va contenir des routes (url accessible)
@Controller('orders')
export class OrderItemController {
  CreateOrderItemService: any;
  // injection de dépendance
  // permet d'instancier la classe ArticleService
  // dans la propriété articleService
  constructor() {}
 @UseGuards(AuthGuard)

  @Post()
  createOrderItem(@Body() data: OrderItemCreateDto) {
    console.log(data);
    return this.CreateOrderItemService.createOrder(data);
  }

  @Delete(':id')
  deleteOrderItem(@Param('id') id: string) {
    return this.CreateOrderItemService.deleteOrder(id);
  }
}
