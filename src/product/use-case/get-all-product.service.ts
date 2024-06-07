import { Injectable } from '@nestjs/common';
import { Product } from '../entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>) {}

        async getAllProduct() {
            try {
              return this.productRepository.find();
            } catch (error) {
              console.log(error);
              throw new Error('Error while creating user');
            }
          }
}