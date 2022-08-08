// Task 1

const customer = {
  firstName: "Lara",
  lastName: "Namiq",
  id: "LaraN",
  phoneNumber: "077",
  email: "laragmail",
};

console.log(customer.firstName);

// Task 2

customer.address = {
  street: "Abc Street",
  city: "London",
  state: "England",
  zipcode: "AB12 3CD",
};

console.log(customer.address);

// Task 3

console.log(`Welcome, ${customer.firstName} + ${customer.lastName} !`);

// Task 4

const product = {
  name: "Computer",
  price: 1500,
  description: "A machine",
  quantity: 1,
};

console.log(product.price);

// Task 5

const total = product.price * 7;
console.log(`Total: $${product.price * 7}`);

// Task 6

console.log(total >= 100);

// Task 7

product.quantity -= 7;
