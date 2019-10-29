"use strict";

let user = {}

console.log(user);
console.log("Type:",typeof user);

user = {
    username: "Batman",
    password: "hunter2"
}

console.log(user);

if (user.username == "Batman" && user.password == "hunter2") {
    console.log("Access Granted.");
}
else {
    console.log("Access Denied.")
}

let user2 = {
    username: "Wonder Woman",
    password: 123123,
    greet: function () {
        console.log("Hello, I am", this.username);
    },
    updateUser: function (newName) {
        this.username = newName;
    }
}
 user2.greet();

 user2.updateUser(prompt("Enter in the new name."));
 user2.greet();

