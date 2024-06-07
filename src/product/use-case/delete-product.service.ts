import { Injectable } from '@nestjs/common';
import { Product } from '../entity/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeleteProductService {
    
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>) {}

    async deleteProduct(productId: number): Promise<void> {
        const product = await this.productRepository.findOne({ where: { id: productId } });
        
        if (!product) {
            throw new Error('Product not found');
        }
        
        product.isAvailable = false;
        console.log("Product deleted successfully")
        await this.productRepository.save(product);
    }
}