/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItemCreateDto } from '../dto/create-order-item.dto';
import { Order } from './order.entity';


@Entity()
export class OrderItem {
     


    constructor(product: string) {
        this.price = 10;
        this.product = product;
        this.quantity = 1;
      }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    product: string;

    @Column({ type: 'float' })
    quantity: number;

    @Column({ type: 'varchar' , nullable: true})
    description: string;

    @Column({ type: 'varchar' , nullable: true})
    image: string;

    @Column({ type: 'varchar' , nullable: true})
    color: string;

    @Column({ type: 'float' })
    price: number;

    @ManyToOne(() => Order, (order) => order.item)
    order: Order


    public incrementQuantity() {
        this.quantity += 1;
      }
}
