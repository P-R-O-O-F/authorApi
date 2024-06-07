/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import {OrderCreateDto} from '../dto/create-order.dto';
import {Order} from '../entity/order.entity';
import { Repository } from 'typeorm';
import { OrderItemCreateDto } from '../dto/create-order-item.dto';

export class CreateOrderItemService {

    constructor(
        @InjectRepository(Order)
        private readonly orderItemRepository: Repository<Order>,
      ) {}
      
    async createOrderItem(data: OrderCreateDto): Promise<Order> {
        try {
            const order = new Order(data);
            await this.orderItemRepository.save(order);
            return order;
        } catch (error) {
            console.log(error);
            throw new Error(`Error while creating order: ${error.message}`);
        }
    }
}
