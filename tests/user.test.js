
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
    test('should create a new user', async () => {
        const response = await request(app).post('/api/users').send({ name: 'Jane', email: 'jane@example.com' });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('User created successfully');
    });

    test('should get a user by id', async () => {
        const response = await request(app).get('/api/users/1');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('User 1 found');
    });
});
