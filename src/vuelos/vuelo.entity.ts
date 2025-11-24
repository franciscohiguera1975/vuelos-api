import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vuelos')
export class Vuelo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  origen: string;

  @Column()
  destino: string;

  @Column()
  fecha: Date;

  @Column()
  precio: number;

  @Column()
  asientosDisponibles: number;

  @Column()
  estado: boolean;


}
