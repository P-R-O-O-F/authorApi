import { Injectable } from '@nestjs/common';
import { Product } from '../entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class CreateProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>) {}

    async createProduct(data: CreateProductDto) {
        try {
            const product = new Product(data);
            return this.productRepository.save(product);
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}