/* eslint-disable prettier/prettier */
import { Order } from 'src/order/entity/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' , unique: true})
  username: string;

  @Column({ type: 'text', nullable: true})
  firstName: string;

  @Column({ type: 'text', nullable: true})
  lastName: string;

  @Column({ type: 'text', nullable: true})
  age: string;

  @Column({ type: 'text'})
  password: string;

    @Column({ type: 'text', nullable: true})
    city: string;

    @OneToMany(() => Order, (order) => order.customer, { cascade: true })
  orders: Order[];
}
