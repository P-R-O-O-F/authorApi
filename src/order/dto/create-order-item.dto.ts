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
  @MinLength(1, { message: 'product vide' })
  product: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @MinLength(1, { message: 'couleur vide' })
  color: string;

  @MinLength(1, { message: 'image vide' })
  image: string;

  @MinLength(1, { message: 'description vide' })
  description: string;
  
}
