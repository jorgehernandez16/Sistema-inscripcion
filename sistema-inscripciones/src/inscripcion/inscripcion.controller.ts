import { Controller, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AtletaService } from '../atleta/atleta.service';
import { Inscripcion } from './inscripcion.entity';
import { BadRequestException } from '@nestjs/common';

@Controller('inscripciones')
export class InscripcionController {
  constructor(private readonly atletaService: AtletaService) {}

  @Post(':atletaId/prueba/:pruebaId')
  async inscribirAtleta(
    @Param('atletaId', ParseIntPipe) atletaId: number,
    @Param('pruebaId', ParseIntPipe) pruebaId: number,
    @Body('categoria') categoria: string,
  ): Promise<Inscripcion> {
    try {
      return await this.atletaService.inscribirEnPrueba(atletaId, pruebaId, categoria);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message); // Mensaje claro para el cliente
      }
      throw error; // Lanza otros errores tal como están
    }
  }
}
