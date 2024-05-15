/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text'})
  lastName: string;

  @Column({ type: 'text'})
  age: string;

  @Column({ type: 'text'})
  password: string;

    @Column({ type: 'text', nullable: true})
    city: string;
}
