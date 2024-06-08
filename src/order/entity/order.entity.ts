/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderCreateDto } from '../dto/create-order.dto';
import { SetAdressOrderDto } from '../dto/set-adress-order.dto';
import { SetInvoiceAdressOrderDto } from '../dto/set-invoice-adress-order.dto';
import { OrderItem } from './order-item.entity';
import { User } from 'src/user/entity/user.entity';

@Entity()
export class Order {

    static OrderStatus = {
        InCart: 'In Cart',
        Shipped: 'Shipped',
        Paid: 'Paid',
        Invoiced: 'Invoiced',
      };
     


    constructor(orderCreateDto?: OrderCreateDto) {
        if (orderCreateDto) {
          this.createdAt = new Date();
          this.updatedAt = new Date();
          //this.customer = customer;
          this.items = [];
          //this.createOrderItems(orderCreateDto.items);
          this.status = Order.OrderStatus.InCart;
          this.total = 404;
          this.paidAt = null;
          this.shippingAddress = null;
          this.shippingMethod = null;
          this.invoiceAddress = null;
          this.shippingMethodSetAt = null;
          this.invoiceAddressSetAt = null;
        }
      }

    public getOrderItemWithProductId(productId: string): OrderItem {
        return this.items.find((item) => {
            return item.product.id.toString() === productId;
        });
    }

    payOrder() {
        this.status = 'Paid';
        this.updatedAt = new Date();
        this.paidAt = new Date();
    }

      updateShippingAddress(
        SetAdressOrderDto: SetAdressOrderDto,
      ) {
        this.shippingAddress = SetAdressOrderDto.shippingAdress;
        this.shippingMethod = SetAdressOrderDto.shippingMethod;
        this.shippingMethodSetAt = new Date();
        if (!this.invoiceAddress) {
          this.invoiceAddress = this.shippingAddress;
          this.invoiceAddressSetAt = new Date();
        }
        this.updatedAt = new Date();
        this.status = Order.OrderStatus.Shipped;
      }

    updateInvoiceAddress(
        SetInvoiceAdressOrderDto: SetInvoiceAdressOrderDto,
      ) {
        this.invoiceAddress = SetInvoiceAdressOrderDto.invoiceAdress;
        this.invoiceAddressSetAt = new Date();
        this.updatedAt = new Date();
        this.status = Order.OrderStatus.Invoiced;
      }

      @PrimaryGeneratedColumn()
      id: number;
    
      @Column({ type: 'date' })
      createdAt: Date;
      updatedAt: Date;
    
      @ManyToOne(() => User, (user) => user.orders)
      @JoinColumn({ name: 'customerId' })
      customer: User;
    
      @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
        cascade: true,
        eager: true,
      })
      items: OrderItem[];
    
      @Column({ type: 'varchar', default: Order.OrderStatus.InCart })
      status: string;
    
      @Column({ type: 'int' })
      total: number;
    
      @Column({ type: 'date', nullable: true })
      paidAt: Date;
    
      @Column({ type: 'varchar', nullable: true })
      shippingAddress: string;
    
      @Column({ type: 'varchar', nullable: true })
      shippingMethod: string;
    
      @Column({ type: 'varchar', nullable: true })
      invoiceAddress: string;
    
      @Column({ type: 'date', nullable: true })
      shippingMethodSetAt: Date;
    
      @Column({ type: 'date', nullable: true })
      invoiceAddressSetAt: Date;
}
