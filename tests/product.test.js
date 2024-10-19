
const request = require('supertest');
const app = require('../app');

describe('Product API', () => {
    test('should create a new product', async () => {
        const response = await request(app).post('/api/products').send({ name: 'Laptop', price: 1200 });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Product created successfully');
    });

    test('should get a product by id', async () => {
        const response = await request(app).get('/api/products/1');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Product 1 found');
    });
});
