/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItemCreateDto } from '../dto/create-order-item.dto';
import { OrderItem } from '../entity/order-item.entity';

export class CreateOrderItemService {

    constructor(
        @InjectRepository(OrderItem)
        private readonly orderItemRepository: Repository<OrderItem>,
      ) {}
      
}
