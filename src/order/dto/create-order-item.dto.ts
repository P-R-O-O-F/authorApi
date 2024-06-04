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
import { ManyToOne } from 'typeorm';
import { Order } from '../entity/order.entity';

export class OrderItemCreateDto {
  @MinLength(1, { message: 'product vide' })
  product: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  
}
