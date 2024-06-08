/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItemCreateDto } from '../dto/create-order-item.dto';
import { Product } from 'src/product/entity/product.entity';
import { Order } from './order.entity';


@Entity()
export class OrderItem {
  constructor(orderItemCreateDto: OrderItemCreateDto) {
    if (orderItemCreateDto) {
      this.quantity = orderItemCreateDto.quantity;
    }
  }

  incrementQuantity() {
    this.quantity++;
  }

  addQuantity(quantity: number) {
    this.quantity += quantity;
    this.updatePrice();
  }

  updatePrice() {
    this.price = this.product.price * this.quantity;
  }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'varchar' , nullable: true})
    description: string;

    @Column({ type: 'int', nullable: true })
    price: number;
  
    @ManyToOne(() => Order, (order) => order.items)
    @JoinColumn({ name: 'orderId' })
    order: Order;
  
    @ManyToOne(() => Product, (product) => product.orderItems, { eager: true })
    product: Product;
}
