
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Scalable Node.js API',
      version: '1.0.0',
      description: 'API documentation for scalable Node.js application',
      contact: {
        name: 'Lance',
      },
      servers: [{ url: 'http://localhost:3000' }],
    },
  },
  apis: ['./routes/*.js'], // Path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;
