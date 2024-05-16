/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderCreateDto } from '../dto/create-order.dto';
import { SetAdressOrderDto } from '../dto/set-adress-order.dto';

@Entity()
export class Order {


    constructor(orderCreateData?: OrderCreateDto){
        if(orderCreateData){
            if(orderCreateData.item.length > 3) {
                throw new Error("trop d'items");
            }
            this.item = orderCreateData.item,
            this.createdAt = new Date(),
            this.updatedAt = new Date(),
            this.customer = 'test',
            this.status = 'Cart',
            this.paidAt = null,
            this.total = orderCreateData.item.length * 10
        }     
    }

    paid(){
        if(this.status === 'Verified'){
        this.status = 'Paid';
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

        this.status = 'Verified';
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

    @Column({ type: 'json' })
    item: string[];

    @Column({ type: 'varchar' })
    status: string;

    @Column({ type: 'float' })
    total: number;
}
