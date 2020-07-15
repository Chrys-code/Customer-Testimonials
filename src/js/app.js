import { customerList } from "./customer.js";

//Variables
const customerImage = document.querySelector("#customer-img");
const customerName = document.querySelector("#customer-name");
const customerText = document.querySelector("#customer-text");
const btns = document.querySelectorAll(".btn");
let counter = 0;

//Eventlisteners
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("prevBtn")) {
      counter--;
      if (counter < 0) {
        counter = customerList.length - 1;
      }
      customerImage.src = customerList[counter].image;
      customerName.textContent = customerList[counter].name;
      customerText.textContent = customerList[counter].message;
    }

    if (btn.classList.contains("nextBtn")) {
      counter++;
      if (counter > customerList.length - 1) {
        counter = 0;
      }
      customerImage.src = customerList[counter].image;
      customerName.textContent = customerList[counter].name;
      customerText.textContent = customerList[counter].message;
    }
  });
});

/*
// In case if we want to input those customers:
// Once input is done ES6 class will be used
// Object access should be implemented to update
// customer content in the main function

// Customer objects
export const newCustomer = new Customer(
  ${customerList.length},
  ${name},
  ${message},
  "url('./images/Customer-${index}.png')"
);

newCustomer.pushCustomer();
console.log(customerList);
*/
