import { Controller, Post, Get, Body } from '@nestjs/common';
import { PruebaService } from './prueba.service';

@Controller('prueba')
export class PruebaController {
  constructor(private readonly pruebaService: PruebaService) {}

  // Ruta para crear una nueva prueba (solo el administrador debería usarla)
  @Post('crear')
  async crearPrueba(
    @Body('nombre') nombre: string,
    @Body('tipo') tipo: string,
    @Body('descripcion') descripcion: string,
  ) {
    return this.pruebaService.createPrueba(nombre, tipo, descripcion);
  }

  // Ruta para obtener todas las pruebas disponibles
  @Get('disponibles')
  async obtenerPruebasDisponibles() {
    return this.pruebaService.getPruebas();
  }
}
