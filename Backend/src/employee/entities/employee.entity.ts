import { Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Employee {

    @Column({primary: true, generated: true})
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

    @Column()
    estado: boolean;

    @CreateDateColumn({ type: 'timestamptz' }) // Guarda la fecha y hora de creación
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' }) // Guarda la fecha y hora de la última actualización
    updated_at: Date;

}
