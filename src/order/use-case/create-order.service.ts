/* eslint-disable prettier/prettier */
import {OrderCreateDto} from '../dto/create-order.dto';
import {Order} from '../entity/order.entity';

export class CreateOrderService {
    async createOrder(data: OrderCreateDto): Promise<Order> {
        try {
            if(data.item.length > 3) {
                throw new Error("trop d'items");
            }
            const order = new Order();
            order.item = data.item;
            order.createdAt = new Date();
            order.updatedAt = new Date();
            order.customer = 'test';
            order.status = 'Cart';
            order.total = order.item.length * 10;
            return order;
        } catch (error) {
            console.log(error);
            throw new Error('Error while creating order');
        }
    }
}
