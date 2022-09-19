
import supertest from 'supertest';
import app from '../src/app';
import client  from '../src/config/prisma';
import * as authFactory from './factories/authFactory';

beforeEach(async () => {
  await client.$executeRaw`TRUNCATE TABLE items`;
});

afterAll(async () => {
  await client.$disconnect();
});

describe('Testa POST /signUp', () => {
  it('Deve retornar 201, se cadastrado um usuário no formato correto', async () => {
    const body = await authFactory.signUpFactory();

    const result = await supertest(app).post('/signUp').send(body);

    expect(result.status).toBe(201);
  });

  it('Deve retornar 409, ao tentar cadastrar um email que exista', async () => {
    const body = await authFactory.signUpFactory();

    await supertest(app).post('/signUp').send(body);
    const result = await supertest(app).post('/signUp').send(body);

    expect(result.status).toBe(409);
  });
});


describe('Testa POST /signIn', () => {
  it('Deve retornar 200, se o login for efetuado', async () => {
    const body = await authFactory.signInFactory();

    const result = await supertest(app).post('/signIn').send(body);

    expect(result.status).toBe(200);
  });

  it('Deve retornar 404, caso o usuário não seja encontrado no banco de dados', async () => {
    const body = await authFactory.signInFactory();

    await supertest(app).post('/signIn').send(body);
    const result = await supertest(app).post('/signIn').send(body);

    expect(result.status).toBe(404);
  });
});
