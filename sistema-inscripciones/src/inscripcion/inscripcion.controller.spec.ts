import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module'; // Asegúrate de que la ruta sea correcta

describe('InscripcionController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should successfully enroll an athlete in a test', async () => {
    const response = await request(app.getHttpServer())
      .post('/inscripciones/1/prueba/1')
      .send({ categoria: 'U18' }) // Cambia los datos según lo que tengas
      .expect(201); // Expectativa de éxito

    expect(response.body).toHaveProperty('id'); // Ajusta esto a las propiedades de tu objeto Inscripcion
  });

  it('should not enroll an athlete in more than 3 tests', async () => {
    // Primero, inscribimos al atleta en 3 pruebas
    await request(app.getHttpServer())
      .post('/inscripciones/1/prueba/1')
      .send({ categoria: 'U18' });

    await request(app.getHttpServer())
      .post('/inscripciones/1/prueba/2')
      .send({ categoria: 'U18' });

    await request(app.getHttpServer())
      .post('/inscripciones/1/prueba/3')
      .send({ categoria: 'U18' });

    // Ahora intentamos inscribirlo en una cuarta prueba
    const response = await request(app.getHttpServer())
      .post('/inscripciones/1/prueba/4') // Cambia el ID de prueba según tus datos
      .send({ categoria: 'U18' })
      .expect(400); // Esperamos un error de solicitud incorrecta

    expect(response.body.message).toBe('El atleta ya está inscrito en 3 pruebas. No puede inscribirse en más.');
  });

  afterAll(async () => {
    await app.close();
  });
});
