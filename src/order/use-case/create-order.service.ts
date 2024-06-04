/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import {OrderCreateDto} from '../dto/create-order.dto';
import {Order} from '../entity/order.entity';
import { Repository } from 'typeorm';
import { OrderItemCreateDto } from '../dto/create-order-item.dto';

export class CreateOrderService {

    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
      ) {}
      
    async createOrder(data: OrderCreateDto): Promise<Order> {
        try {
            if (data.item.length > 3) {
                throw new Error("trop d'items");
            }
            const order = new Order(data);
            await this.orderRepository.save(order);
            return order;
        } catch (error) {
            console.log(error);
            throw new Error(`Error while creating order: ${error.message}`);
        }
    }
}
