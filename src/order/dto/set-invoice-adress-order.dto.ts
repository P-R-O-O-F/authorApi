/* eslint-disable prettier/prettier */
import { ArrayMaxSize, ArrayMinSize, IsDate, IsNumber, MinLength, isNumber } from 'class-validator';

export class SetInvoiceAdressOrderDto {
    @MinLength(5, {message: 'invoiceAdress is too short'})
    invoiceAdress: string;
}
