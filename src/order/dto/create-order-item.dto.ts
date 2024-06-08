/* eslint-disable prettier/prettier */
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsDate,
  IsNumber,
  MinLength,
  isNumber,
} from 'class-validator';
import { OrderCreateDto } from './create-order.dto';
import { OrderItem } from '../entity/order-item.entity';

import { ManyToOne } from 'typeorm';
import { Order } from '../entity/order.entity';

export class OrderItemCreateDto {
  
  @IsNumber()
  quantity: number;

  @IsNumber()
  productId: number;
  
}
