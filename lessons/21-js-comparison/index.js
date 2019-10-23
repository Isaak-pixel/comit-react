"use strict";

alert("Enter two numbers to see if the first is greater than the second.");

const num1 = prompt("Enter in the first number.");
const num2 = prompt("Enter in the second number.");

const accurate = confirm(num1 > num2);

 console.log("Were we accurate?", accurate);