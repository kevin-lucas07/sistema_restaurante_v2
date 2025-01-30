import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({unique: true})
  usuario: string;

  @Column({unique: true})
  correo: string;

  @Column({nullable: false})
  contrasenia: string;

  @CreateDateColumn({ type: 'timestamptz' }) // Guarda la fecha y hora de creación
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' }) // Guarda la fecha y hora de la última actualización
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  delete_at: Date;

  @OneToMany(() => Order, (order) => order.user)
  order: Order[];
}
