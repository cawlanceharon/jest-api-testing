
# Scalable Node.js API

This is a simple scalable Node.js and Express API that provides three sets of APIs: 
1. User API
2. Product API
3. Order API

Each API has routes for creating and retrieving data.

## Getting Started

### Installation

Install dependencies using Yarn:

```bash
yarn install
```

### Running the Application

Start the application:

```bash
yarn start
```

### Running Tests

To run tests:

```bash
yarn test
```

## API Routes

### User API
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Retrieve a user by ID

### Product API
- `POST /api/products` - Create a new product
- `GET /api/products/:id` - Retrieve a product by ID

### Order API
- `POST /api/orders` - Place a new order
- `GET /api/orders/:id` - Retrieve an order by ID
