import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InscripcionController } from './inscripcion.controller';
import { AtletaService } from '../atleta/atleta.service'; // Asegúrate de la ruta
import { Inscripcion } from './inscripcion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inscripcion])],
  controllers: [InscripcionController],
  providers: [AtletaService], // Si necesitas el AtletaService aquí
})
export class InscripcionModule {}
