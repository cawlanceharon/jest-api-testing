const express = require('express');
const { createOrder, getOrder } = require('../controllers/orderController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - productId
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the order
 *         productId:
 *           type: string
 *           description: The ID of the product
 *         userId:
 *           type: string
 *           description: The ID of the user
 *       example:
 *         id: 1
 *         productId: "123"
 *         userId: "456"
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Place a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order placed successfully
 *       400:
 *         description: Bad request
 */
router.post('/orders', createOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order ID
 *     responses:
 *       200:
 *         description: Order found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 */
router.get('/orders/:id', getOrder);

module.exports = router;
