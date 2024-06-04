/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import {SetAdressOrderDto} from '../dto/set-adress-order.dto';
import {Order} from '../entity/order.entity';
import { Repository } from 'typeorm';
import { SetInvoiceAdressOrderDto } from '../dto/set-invoice-adress-order.dto';

export class SetAdressOrderService {

    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
      ) {}
      
    async adressSet(id : number,data: SetAdressOrderDto): Promise<Order> {
        const order = await this.orderRepository.findOne({ where: { id } });
        try {
            order.adressSet(data);
            await this.orderRepository.save(order);
            return order;
        } catch (error) {
            console.log(error);
            throw new Error('Error while updating order');
        }
    }

    async setInvoiceAdress(id : number,data: SetInvoiceAdressOrderDto): Promise<Order> {
        const order = await this.orderRepository.findOne({ where: { id } });
        try {
            order.setInvoiceAdress(data);
            await this.orderRepository.save(order);
            return order;
        } catch (error) {
            console.log(error);
            throw new Error('Error while updating order');
        }
    }
}
