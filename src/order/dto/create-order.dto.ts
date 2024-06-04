/* eslint-disable prettier/prettier */
import { ArrayMaxSize, ArrayMinSize, IsDate, IsNumber, MinLength, isNumber } from 'class-validator';

export class OrderCreateDto {

  @ArrayMaxSize(3, { message: 'Trop d\'items' })
  item: string[];
}
