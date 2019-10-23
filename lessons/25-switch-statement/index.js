"use strict";

const weekdayNum = Number(prompt("Enter in a number corresponding to the day of the week."))
let message;

if (weekdayNum == 1) {
    console.log("Today is Monday!");
}
else if (weekdayNum == 2) {
    console.log("Today is Tuesday!");
}
else if (weekdayNum == 3) {
    console.log("Today is Wednesday!");
}
else if (weekdayNum == 4) {
    console.log("Today is Thursday!");
}
else if (weekdayNum == 5) {
    console.log("Today is Friday!");
}
else if (weekdayNum == 6) {
    console.log("Today is Saturday!");
}
else if (weekdayNum == 7) {
    console.log("Today is Sunday!");
}
else {
    console.log("Please enter in a number between 1-7.");
}

console.log("");
console.log("");

switch(weekdayNum) {
    case 1:
    message = "Today is Monday!";
    break;

    case 2:
    message = "Today is Tuesday!";
    break;
    
    case 3:
    message = "Today is Wednesday!";
    break;

    case 4:
    message = "Today is Thursday!";
    break;

    case 5:
    message = "Today is Friday!";
    break;

    case 6:
    message = "Today is Saturday!";
    break;

    case 7:
    message = "Today is Sunday!";
    break;

    default:
    message = "Please enter in a number between 1-7."
}

console.log(message);