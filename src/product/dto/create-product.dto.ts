import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
    @IsString()
    title: string;

    @IsNumber()
    price: number;

    @IsString()
    description: string;

    @IsString()
    image: string;

    @IsString()
    color: string;
}