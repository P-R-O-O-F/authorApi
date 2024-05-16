/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderCreateDto } from '../dto/create-order.dto';

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
            this.total = orderCreateData.item.length * 10
        }     
    }


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    createdAt: Date;

    @Column({ type: 'date' })
    updatedAt: Date;

    @Column({ type: 'text' })
    customer: string;

    @Column({ type: 'json' })
    item: string[];

    @Column({ type: 'varchar' })
    status: string;

    @Column({ type: 'float' })
    total: number;
}
