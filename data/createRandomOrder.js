// let us create some pizza with price
// let us create some pizza with price
const pizzaNames = [
  { name: "Margherita", price: 8.99 },
  { name: "Pepperoni", price: 9.99 },
  { name: "BBQ Chicken", price: 10.99 },
  { name: "Hawaiian", price: 9.49 },
  { name: "Veggie Delight", price: 8.49 },
  { name: "Four Cheese", price: 11.49 },
  { name: "Meat Lover's", price: 12.99 },
  { name: "Buffalo Chicken", price: 11.99 },
  { name: "Mushroom & Spinach", price: 9.99 },
  { name: "Mediterranean", price: 10.49 },
  { name: "Taco Pizza", price: 12.49 },
  { name: "Seafood Pizza", price: 13.99 },
  { name: "Pesto Chicken", price: 11.49 },
  { name: "Capricciosa", price: 10.99 },
  { name: "Mexican Pizza", price: 12.49 },
];

// and some toppings
const toppings = [
  { name: "Nothing", price: 0 },
  { name: "Mushrooms", price: 1.5 },
  { name: "Onions", price: 1.0 },
  { name: "Pepperoni", price: 2.0 },
  { name: "Sausage", price: 2.5 },
  { name: "Extra Cheese", price: 1.75 },
  { name: "Olives", price: 1.25 },
  { name: "Bell Peppers", price: 1.5 },
  { name: "Bacon", price: 2.5 },
  { name: "Pineapple", price: 1.75 },
  { name: "Anchovies", price: 2.0 },
  { name: "Spinach", price: 1.25 },
  { name: "Garlic", price: 0.75 },
  { name: "Sun-Dried Tomatoes", price: 1.5 },
];

// simulate customer names
// simulate customer names
const customerNames = [
  "John Doe",
  "Jane Smith",
  "Michael Brown",
  "Emily Davis",
  "James Johnson",
  "Olivia Wilson",
  "Robert Miller",
  "Sophia Moore",
  "David Taylor",
  "Isabella Anderson",
  "William Thomas",
  "Mia Jackson",
  "Joseph White",
  "Charlotte Harris",
  "Daniel Clark",
  "Amelia Lewis",
  "Matthew Walker",
  "Abigail Hall",
  "Ethan Young",
  "Harper King",
  "Liam Martin",
  "Emma Thompson",
  "Ava Martinez",
  "Noah Scott",
  "Lucas Lee",
  "Mason Harris",
  "Ella Robinson",
  "Chloe Green",
  "Zoe Turner",
  "Jackson Young",
  "Sebastian Gray",
];

// delivery status
const deliveryStatus = ["ordered", "prepared"];

function getRandomName() {
  return customerNames[Math.floor(Math.random() * customerNames.length)];
}

function createRandomOrder() {
  const pizza = pizzaNames[Math.floor(Math.random() * pizzaNames.length)];
  const topping = toppings[Math.floor(Math.random() * toppings.length)];
  const amount = Math.floor(Math.random() * 5) + 1; // random amount between 1-5
  const customerName = getRandomName();

  return {
    customerName: customerName,
    pizzaName: pizza.name,
    toppingName: topping.name,
    amount: amount,
    totalPrice: ((pizza.price + topping.price) * amount).toFixed(2),
    deliveryStatus: "ordered",
  };
}

// Function to generate multiple orders
function createMultipleOrders(orderCount = 1) {
  const orders = [];
  for (let i = 0; i < orderCount; i++) {
    orders.push(createRandomOrder());
  }
  return orders;
}

module.exports = createMultipleOrders;
