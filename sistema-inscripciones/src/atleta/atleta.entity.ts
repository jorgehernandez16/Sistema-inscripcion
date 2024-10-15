import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class Atleta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  documentoIdentidad: string;

  @Column()
  nombreCompleto: string;

  @Column()
  municipioClub: string;

  @Column()
  añoNacimiento: number;

  @Column()
  categoria: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @Column()
  telefono: string;
}
