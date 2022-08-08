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

customer.street = "Abc Street";
customer.city = "London";
customer.state = "England";
customer.zipcode = "AB12 3CD";

console.log(customer.zipcode);

// Task 3

console.log(`Welcome, ${customer.firstName} + ${customer.lastName} + '!'`);

// Task 4

const product = {
  name: "Computer",
  price: 1500,
  description: "A machine",
  quantity: 1,
};

console.log(product.price);

// Task 5
=

const total = (product.quantity + 7) * product.price;

console.log(`Total: ${total}`);

// Task 6

if (product.total > 100) {
  console.log("true")
}

/**
 * TODO: Assign your own values to meet the conditions below:

 * 6. Log a new message that prints either 'true' or 'false' to the screen depending on whether or not the customer spent over $100. Use conditional operators to accomplish this. Don't worry about the '$' symbol. Just use the number 100.
 *
 * 7. Update `product` to reflect the new quantity. In other words, the new quantity value should be 7 less than whatever you initialized it with.
 */
