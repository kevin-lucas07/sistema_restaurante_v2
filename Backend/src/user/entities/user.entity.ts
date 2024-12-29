import { Order } from 'src/order/entities/order.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  usuario: string;

  @Column()
  correo: string;

  @Column()
  contrasenia: string;

  @CreateDateColumn({ type: 'timestamptz' }) // Guarda la fecha y hora de creación
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' }) // Guarda la fecha y hora de la última actualización
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  delete_at: Date;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
