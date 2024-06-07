import { Injectable } from '@nestjs/common';
import { Product } from '../entity/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetProductByIdService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>) {}

    getProductById(id: number) {
        return this.productRepository.findOne({ where: { id } });
    }
}