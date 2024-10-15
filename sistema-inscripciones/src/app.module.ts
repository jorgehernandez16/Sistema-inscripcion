import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtletaModule } from './atleta/atleta.module'; // Asegúrate de la ruta
import { InscripcionModule } from './inscripcion/inscripcion.module'; // Asegúrate de la ruta
import { PruebaModule } from './prueba/prueba.module'; // Si tienes uno para pruebas

@Module({
  imports: [
    TypeOrmModule.forRoot({
      
      type: 'sqlite', // sqlite' para usar SQLite
      database: ':memory', // Usar base de datos en memoria

      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    AtletaModule,
    InscripcionModule,
    PruebaModule,

  ],
})
export class AppModule {}