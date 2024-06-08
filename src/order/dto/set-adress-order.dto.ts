/* eslint-disable prettier/prettier */
import { ArrayMaxSize, ArrayMinSize, IsDate, IsNumber, IsString, MinLength, isNumber } from 'class-validator';

export class SetAdressOrderDto {
    @MinLength(5, {message: 'shippingAdress is too short'})
    shippingAdress: string;

    @IsString()
    invoiceAdress: string;

    @MinLength(1, {message: 'shippingMethod is too short'})
    shippingMethod: string;
}
