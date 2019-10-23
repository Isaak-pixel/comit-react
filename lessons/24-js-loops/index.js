"use strict";

console.log("Adding every number between 0-1000, breaking when total is greater than 400");
let total = 0;
for (let h = 1; h <= 1000; h++) {
    total += h;
    console.log(total);
    if (total > 400) {
        break;
    }
}

console.log("");
console.log("");
console.log("");

//for loop, 0-10
//i is used for looping purposes
console.log("Counting from 0-10 with a for loop");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("");
console.log("");
console.log("");

//while loop, 0-10
console.log("Counting from 0-10 with a while loop");
let whileCount10 = 0;
while (whileCount10 <= 10) {
    console.log(whileCount10)
    whileCount10++;
}

console.log("");
console.log("");
console.log("");

//do while loop, 0-10
console.log("Counting from 0-10 with a do while loop");
let doCount10 = 0;
do {
    console.log(doCount10);
    doCount10++;
} while (doCount10 <= 10);

console.log("");
console.log("");
console.log("");

//for loop, 100-0
//j is used for looping purposes
console.log("Counting from 100-0 with a for loop");
for (let j = 100; j >= 0; j--) {
    console.log(j);
}

console.log("");
console.log("");
console.log("");

//while loop, 100-0
console.log("Counting from 100-0 with a while loop");
let whileCount100 = 100;
while (whileCount100 >= 0) {
    console.log(whileCount100)
    whileCount100--;
}

console.log("");
console.log("");
console.log("");

//do while loop, 100-0
console.log("Counting from 100-0 with a do while loop");
let doCount100 = 100;
do {
    console.log(doCount100);
    doCount100--;
} while (doCount100 >= 0);

console.log("");
console.log("");
console.log("");

//for loop, 0-100 even only
//k is used for looping purposes
console.log("Counting from 0-100, with only even numbers with a for loop");
for (let k = 0; k <= 100; k += 2) {
    console.log(k);
}

console.log("");
console.log("");
console.log("");

//while loop, 0-100 even only
console.log("Counting from 0-100, with only even numbers with a while loop");
let whileEven = 0;
while (whileEven <= 100) {
    console.log(whileEven);
    whileEven += 2;
}

console.log("");
console.log("");
console.log("");

//do while loop, 0-100 even only
console.log("Counting from 0-100, with only even numbers with a do while loop");
let doEven = 0;
do {
    console.log(doEven);
    doEven += 2;
} while (doEven <= 100);

console.log("");
console.log("");
console.log("");

//for loop, the A triangle
// l and m are used for looping purposes
console.log("Printing a triangle made out of A for the for loop");
for (let l = 0; l < 13; l++) {
	for (let m = 0; m <= l; m++) {
		document.writeln("A");
	}
	document.writeln("<br />");
}

//while loop, the B triangle
document.write("<br />")
console.log("Printing a triangle made out of B for the while loop");

let whileTri1 = 0;
let whileTri2 = 0;

while (whileTri1 < 13) {
    whileTri1++;
    whileTri2 = 0;
    while (whileTri2 < whileTri1) {
        document.writeln("B");
        whileTri2++;
    }
    document.writeln("<br />")
}

//do while loop, the C triangle
document.writeln("<br />")
console.log("Printing a triangle made out of C for the do while loop");

let doTri1 = 0;
let doTri2 = 0;

do {
    doTri1++;
    doTri2 = 0;
    while (doTri2 < doTri1) {
        document.writeln("C");
        doTri2++;
    }
    document.writeln("<br />")
 } while (doTri1 < 13)