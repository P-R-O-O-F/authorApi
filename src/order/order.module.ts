/* eslint-disable prettier/prettier */
import { Delete, Get, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrderController } from './controller/order.controller';
import { CreateOrderService } from './use-case/create-order.service';
import { PayOrderService } from './use-case/pay-order.service';
import { SetAdressOrderService } from './use-case/set-adress-order.service';
import { OrderItem } from './entity/order-item.entity';
import { AuthGuard } from 'src/auth/use-case/auth-guard.service';
import { JwtModule } from '@nestjs/jwt';
import { create } from 'domain';
import { CreateOrderItemService } from './use-case/create-order-item.service';
import { OrderItemController } from './controller/order-item.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem]),JwtModule,],
  controllers: [OrderController, OrderItemController],
  providers: [
    CreateOrderService,
    PayOrderService,
    SetAdressOrderService,
    CreateOrderItemService,
  ],
})
export class OrderModule {}
