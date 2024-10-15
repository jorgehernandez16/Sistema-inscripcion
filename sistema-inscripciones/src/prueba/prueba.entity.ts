import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prueba {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;  // Ej: 100 metros, 200 metros, Salto largo, etc.

  @Column()
  tipo: string;  // Individual o Conjunto

  @Column()
  descripcion: string;  // Información adicional sobre la prueba (opcional)
}
