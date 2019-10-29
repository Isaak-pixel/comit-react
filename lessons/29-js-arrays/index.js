"use strict";

let siblings = ["Jonah"];

let parents = ["Terri", "Darren"];

let family = siblings.concat(parents);

console.log(family);

family.push("No pets");

family.reverse();

console.log(family[2]);

family[2] = "Mother";

console.log(family);

for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}
console.log("");
console.log("");


let x;

for (x of family) {
    console.log(x);
}