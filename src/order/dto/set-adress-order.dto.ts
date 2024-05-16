/* eslint-disable prettier/prettier */
import { ArrayMaxSize, ArrayMinSize, IsDate, IsNumber, MinLength, isNumber } from 'class-validator';

export class SetAdressOrderDto {
    @MinLength(5, {message: 'shippingAdress is too short'})
    shippingAdress: string;

    @MinLength(5, {message: 'invoiceAdress is too short'})
    invoiceAdress: string;

    @MinLength(1, {message: 'shippingMethod is too short'})
    shippingMethod: string;
}
