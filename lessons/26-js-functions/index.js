"use strict";

function evenNumbers() {
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}

evenNumbers();
function showUser(name, age, phone, address, isMarried) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("Married?:", isMarried);
}

showUser("Isaak", 21, "123-456-7890", "123 Fake St", false);

const showEven = function() {
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}
showEven();
showEven();
showEven();

let max = Number(prompt("Enter in the amount of times the Fibonacci sequence calculates."));

function fibonacci(max) {
    let prev = 0;
    console.log(prev);

    let current = 1;
    console.log(current);

    let next = prev + current;
    console.log(next);

    for (let i = 0; i < max; i++) {
        prev = current;
        current = next;
        next = prev + current;
        console.log(next);
    }
}

fibonacci(max);

function showName() {
    document.writeln("===========<br>");
    document.writeln("=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Isaak&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<br>");
    document.writeln("===========<br>");
}

showName();
showName();
