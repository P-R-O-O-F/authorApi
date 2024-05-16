/* eslint-disable prettier/prettier */
import { In, Repository } from 'typeorm';
import { PayOrderDto } from '../dto/pay-order.dto';
import {Order} from '../entity/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class PayOrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
      ) {}


    async payOrder(id : number): Promise<Order> {
        const order = await this.orderRepository.findOne({ where: { id } });
        try {
            order.paid();
            await this.orderRepository.save(order);
            return order;
        } catch (error) {
            console.log(error);
            throw new Error('Error while updating order');
        }
    }
}
