/* eslint-disable prettier/prettier */
import { Delete, Get, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import { CreateProductService } from './use-case/create-product.service';
import { ProductController } from './controller/product.controller';
import { Product } from './entity/product.entity';
import { DeleteProductService } from './use-case/delete-product.service';
import { GetAllProductService } from './use-case/get-all-product.service';
import { GetProductByIdService } from './use-case/get-product-by-id.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product]),JwtModule,],
  controllers: [ProductController],
  providers: [
    CreateProductService,
    DeleteProductService,
    GetAllProductService,
    GetProductByIdService,
  ],
})
export class ProductModule {}
