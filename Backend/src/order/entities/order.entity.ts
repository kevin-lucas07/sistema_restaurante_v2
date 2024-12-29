import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  estado_pago: boolean;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_final: number;

  @CreateDateColumn({ type: 'timestamptz' }) // Guarda la fecha y hora de creación
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' }) // Guarda la fecha y hora de la última actualización
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamptz' }) // Eliminacion virtual
  delete_at: Date;

  @ManyToOne(() => User, (user) => user.id,{
    eager: true,
  })
  @JoinColumn({name: 'user_id'})
  user: User;
}
