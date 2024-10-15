import { Controller, Post, Body } from '@nestjs/common';
import { AtletaService } from './atleta.service';
import { Atleta } from './atleta.entity';

@Controller('atleta')
export class AtletaController {
  constructor(private readonly atletaService: AtletaService) {}

  // Ruta para inscribir un nuevo atleta
  @Post('inscribir')
  async inscribirAtleta(@Body() atletaData: Partial<Atleta>) {
    return this.atletaService.createAtleta(atletaData);
  }
}
