# Pizza Order API

The **Pizza Order API** is a simple, open-source Node.js API that generates random pizza orders, including pizza types, toppings, customer names, and more. This API is designed to be used in any project where you need random order data for testing or fun.

## Features

- Generate random pizza orders with various pizza types and toppings.
- Random customer names and order quantities.
- Publicly accessible Open API — no authentication required.

## Live API

The API is publicly available and can be accessed here:

- **Base URL**: `https://pizza-order-api.azurewebsites.net/`

### Example Usage

To generate a specific number of random orders, simply append the desired number to the base URL:

- `https://pizza-order-api.azurewebsites.net/5`

This will return 5 randomly generated pizza orders in JSON format.

## Example Response

```json
[
  {
    "customerName": "John Doe",
    "pizzaName": "Pepperoni",
    "toppingName": "Mushrooms",
    "amount": 2,
    "totalPrice": "23.48",
    "deliveryStatus": "ordered"
  },
  {
    "customerName": "Emily Davis",
    "pizzaName": "Veggie Delight",
    "toppingName": "Extra Cheese",
    "amount": 1,
    "totalPrice": "10.24",
    "deliveryStatus": "ordered"
  }
]
```

## USAGE

### NODE

```bash
git clone https://github.com/your-username/pizza-order-api.git
cd pizza-order-api
```

`npm install`

start server
`npm start`

### DOCKER

- Build
  `docker build -t pizza-order-api .`

-RUN
`docker run -p 3000:3000 pizza-order-api`
