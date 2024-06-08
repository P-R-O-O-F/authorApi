/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import {OrderCreateDto} from '../dto/create-order.dto';
import {Order} from '../entity/order.entity';
import { Repository } from 'typeorm';
import { OrderItemCreateDto } from '../dto/create-order-item.dto';
import { OrderItem } from '../entity/order-item.entity';
import { CreateOrderItemService } from './create-order-item.service';
import { GetOneUserByIdService } from 'src/user/use-case/get-one-user-by-id.service';

export class CreateOrderService {

    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        private readonly createOrderItemService: CreateOrderItemService,
        private readonly getUserByIdService: GetOneUserByIdService,
      ) {}
      
      async createOrder(userId: number, data: OrderCreateDto) {
        let order: Order;
        let orderItem: OrderItem;
        try {
          const user = await this.getUserByIdService.getOneUserById(userId);
          order = await this.orderRepository.findOne({
            where: { customer: { id: userId }, status: Order.OrderStatus.InCart },
          });
          if (!order) {
            order = new Order(data);
            order.customer = user;
          }
          orderItem = order.getOrderItemWithProductId(data.productId.toString());
          if (!orderItem) {
            orderItem = await this.createOrderItemService.createOrderItem(data);
            orderItem.updatePrice();
            order.items.push(orderItem);
          } else {
            orderItem.addQuantity(data.quantity);
          }
          return this.orderRepository.save(order);
        } catch (error) {
          console.log(error);
          throw new Error('Error while creating order');
        }
      }
    }