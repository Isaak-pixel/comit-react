"use strict";

let userInput = prompt("What is the current hour? (Enter in a number between 0-23)");

if (userInput < 0 || userInput > 23) {
    console.log("There was an error, please enter in a valid hour.");
}
else if (userInput < 8 || userInput >= 18) {
    console.log("The hour you entered is outside of office hours.");
}
else if (userInput >= 8 && userInput < 18) {
    console.log("We are open, come in!");
}