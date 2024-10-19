
const request = require('supertest');
const app = require('../app');

describe('Order API', () => {
    test('should create a new order', async () => {
        const response = await request(app).post('/api/orders').send({ productId: '123', userId: '456' });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Order placed successfully');
    });

    test('should get an order by id', async () => {
        const response = await request(app).get('/api/orders/1');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Order 1 found');
    });
});
