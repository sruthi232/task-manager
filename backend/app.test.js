const request = require('supertest');
const app = require('./app');

describe('Task API', () => {

  test('GET /tasks should return tasks', async () => {
    const response = await request(app).get('/tasks');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /tasks should create a task', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ title: 'Learn Docker' });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Learn Docker');
  });

});