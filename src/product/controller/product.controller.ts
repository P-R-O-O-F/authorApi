import { Controller, Get, Post, Put, Delete, Body, Param, Patch } from '@nestjs/common';
import { CreateProductService } from '../use-case/create-product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { DeleteProductService } from '../use-case/delete-product.service';
import { GetAllProductService } from '../use-case/get-all-product.service';
import { GetProductByIdService } from '../use-case/get-product-by-id.service';

@Controller('products')
export class ProductController {
    constructor(private readonly createProductService: CreateProductService,
         private readonly deleteProductService: DeleteProductService,
        private readonly getAllProductService: GetAllProductService,
    private readonly getProductByIdService : GetProductByIdService ) {}

    @Get()
    getAllProducts() {
        return this.getAllProductService.getAllProduct();
    }

    @Get(':id')
    getProductById(@Param('id') id: number) {
        return this.getProductByIdService.getProductById(id);
    }

    @Post()
    createProduct(@Body() createProductDto: CreateProductDto) {
        return this.createProductService.createProduct(createProductDto);
    }

    @Patch(':id')
    deleteProduct(@Param('id') id: number) {
        return this.deleteProductService.deleteProduct(id);
    }
}