let readlineSync = require("readline-sync");
let age = readlineSync.question("What is your age?   ");
console.log(typeof(parseInt(age)));