//Create array of customers
export const customerList = [];

//Create Customer Objects
function Customer(id, name, message, image) {
  this.id = id;
  this.name = name;
  this.message = message;
  this.image = image;
}

//Create Customers
function createCustomer(id, name, message, image) {
  let profileImg = `../src/images/Customer-${image}.png`;
  let customer = new Customer(id, name, message, profileImg);
  customerList.push(customer);
}

//Customers
createCustomer(
  1,
  "Caitlyn",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda.",
  "0"
);
createCustomer(
  2,
  "Alesha",
  "This is a JavaScript project to show Customer Testimonials & to practice JavaScript Objects",
  "1"
);
createCustomer(
  3,
  "Amanda",
  "Basic concept is an image slider but instead JavaScript Objects are implemented",
  "2"
);
createCustomer(
  4,
  "Josh",
  "Once Customer Objects are created they are being pused into a single global scope array so It is accessible",
  "3"
);

/*
// In case if we want to input those customers:
// Once input is done ES6 class will be used
import { newCustomer } from "./app.js";
// Customer objects
class Customer {
  constructor(id, name, message, img) {
    this.id = id;
    this.name = name;
    this.message = message;
    this.img = img;
  }
  pushCustomer() {
    customerList.push(newCustomer);
  }
}
*/
