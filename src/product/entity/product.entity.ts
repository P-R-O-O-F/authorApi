import { Min, MinLength } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';

@Entity()
export class Product {

    constructor(createProductData: CreateProductDto) {
       if (createProductData) {
        this.title = createProductData.title;
        this.description = createProductData.description;
        this.price = createProductData.price;
        this.image = createProductData.image;
        this.color = createProductData.color; 
       }   
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar'})
    title: string;

    @Column({ type: 'varchar', nullable: true})
    description: string;

    @Column({ type: 'float', nullable: true})
    price: number;

    @Column({ type: 'varchar', nullable: true})
    image: string;

    @Column({ type: 'varchar', nullable: true})
    color: string;

    @Column({ type: 'boolean', default: true})
    isAvailable: boolean;
}