/* eslint-disable prettier/prettier */
import { ArrayMaxSize, ArrayMinSize, IsDate, IsNumber, MinLength, isNumber } from 'class-validator';

export class OrderCreateDto {

  @IsNumber()
  productId: number;

  @IsNumber()
  quantity: number;
}
