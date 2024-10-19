
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const setupSwagger = require('./swagger');

const app = express();
app.use(express.json());

// Setup Swagger
setupSwagger(app);

// Mount routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

module.exports = app;
