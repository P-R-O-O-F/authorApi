/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderCreateDto } from '../dto/create-order.dto';
import { SetAdressOrderDto } from '../dto/set-adress-order.dto';
import { SetInvoiceAdressOrderDto } from '../dto/set-invoice-adress-order.dto';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {

    static CartStatus = {
        Cart : 'Cart',
        Verified : 'Verified',
        Paid : 'Paid',
        Shipped : 'Shipped',
        Delivered : 'Delivered',
        Closed : 'Closed',
    };
     


    constructor(orderCreateData?: OrderCreateDto){
        if(orderCreateData){
            if(orderCreateData.item.length > 3) {
                throw new Error("trop d'items");
            }
            this.item = this.createOrderItems(orderCreateData);
            this.createdAt = new Date();
            this.updatedAt = new Date();
            this.customer = 'test';
            this.status = Order.CartStatus.Cart;
            this.paidAt = null;
            this.total = 10 * orderCreateData.item.length;
        }          
    }

    private createOrderItems(createOrderData: OrderCreateDto): OrderItem[] {
        const orderItemsToCreate = [];
        this.item = [];
    
        createOrderData.item.map((product) => {
          const existingOrderItem = this.getOrderItemWithProduct(product);
          if (existingOrderItem) {
            existingOrderItem.incrementQuantity();
          } else {
            const newOrderItem = new OrderItem(product);
            orderItemsToCreate.push(newOrderItem);
          }
        });
    
        return orderItemsToCreate;
      }

      private getOrderItemWithProduct(product: string): OrderItem {
        return this.item.find((item) => {
            console.log(item.product)
            return item.product === product;
        });
    }

    paid(){
        if(this.status === 'Verified'){
        this.status = Order.CartStatus.Paid;
        this.updatedAt = new Date();
        this.paidAt = new Date();
        }
    }

    adressSet(data : SetAdressOrderDto){
        if(data.shippingAdress === null || data.shippingMethod === null){
            throw new Error('Shipping address or shipping method is missing');
        }

        if(this.status === 'Paid'){
            throw new Error('Order already paid');
        }

        this.shippingMethod = data.shippingMethod;
        this.shippingAdress = data.shippingAdress;
        this.invoiceAdress = data.invoiceAdress;
        this.shippingMethodSetAt = new Date();
        this.invoiceAddressSetAt = new Date();

        if (this.invoiceAdress === null && data.invoiceAdress === null){
            this.invoiceAdress = data.shippingAdress;
        }

        this.status = Order.CartStatus.Verified;
        this.updatedAt = new Date();
    }

    setInvoiceAdress(data : SetInvoiceAdressOrderDto){
        if(data.invoiceAdress === null){
            throw new Error('Invoice address is missing');
        }

        if(this.status === 'Paid'){
            throw new Error('Order already paid');
        }

        this.invoiceAdress = data.invoiceAdress;
        this.invoiceAddressSetAt = new Date();
        this.status = Order.CartStatus.Verified;
        this.updatedAt = new Date();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    createdAt: Date;

    @Column({ type: 'date' , nullable: true})
    paidAt: Date;

    @Column({ type: 'date' })
    updatedAt: Date;

    @Column({ type: 'text' })
    customer: string;

    @Column({ type: 'varchar', nullable: true})
    shippingAdress: string;

    @Column({ type: 'varchar', nullable: true})
    shippingMethod: string;

    @Column({ type: 'varchar', nullable: true})
    invoiceAdress: string;

    @Column({ type: 'date', nullable: true})
    shippingMethodSetAt: Date;

    @Column({ type: 'date', nullable: true})
    invoiceAddressSetAt: Date;

    @Column({ type: 'varchar' })
    status: string;

    @Column({ type: 'float' })
    total: number;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {cascade : true})
    item: OrderItem[];
}
