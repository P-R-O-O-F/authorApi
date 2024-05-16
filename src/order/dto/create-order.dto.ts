/* eslint-disable prettier/prettier */
import { ArrayMaxSize, ArrayMinSize, IsDate, IsNumber, MinLength, isNumber } from 'class-validator';

export class OrderCreateDto {

  /*createdAt: Date;

  updatedAt: Date;

  paidAt: Date;

  @MinLength(3, {
    message: 'Le customer doit contenir au moins 3 caractères',
  })
  customer: string;
*/
  @ArrayMaxSize(3, { message: 'Trop d\'items' })
  item: string[];
/*
  @MinLength(10, {
    message: 'Le statut doit contenir au moins 2 caractères',
  })
  status: string;

  @IsNumber()
  total: number;*/
}
