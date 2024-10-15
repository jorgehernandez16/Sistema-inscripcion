import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtletaModule } from './atleta/atleta.module'; // Asegúrate de la ruta
import { InscripcionModule } from './inscripcion/inscripcion.module'; // Asegúrate de la ruta
import { PruebaModule } from './prueba/prueba.module'; // Si tienes uno para pruebas

@Module({
  imports: [
    TypeOrmModule.forRoot({
      
      type: 'sqlite', // Cambia a 'sqlite' para usar SQLite
      database: 'path/to/your/database.sqlite', // Usar base de datos en memoria

      
      /* type: 'mysql', // o el tipo que estés usando
      host: 'localhost',
      port: 3306,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'tu_base_de_datos', */
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([AtletaModule,InscripcionModule,PruebaModule]),
/*     AtletaModule,
    InscripcionModule,
    PruebaModule,  */
  ],
})
export class AppModule {}