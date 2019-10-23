"use strict";

alert("Enter 2 numbers to see if the first is larger than the second.");

let number1 = prompt("Enter the first number.");
let number2 = prompt("Enter the second number.");

if (number1 > number2) {
    alert("The first number is greater!");
}

else if (number1 < number2) {
    alert("The second number is greater!");
}

else {
    alert("The two numbers you entered are the same!");
}

document.writeln("The first number you entered was: " + number1 + "<br>");
document.writeln("The second number you entered was: " + number2);