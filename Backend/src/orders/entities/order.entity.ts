import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
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
    eager: true, // Cambia a false si no necesitas cargar siempre la relación
    nullable: true, //Guardar con valores nulos
  })
  @JoinColumn({name: 'user_id'})
  user: User | null;
}
