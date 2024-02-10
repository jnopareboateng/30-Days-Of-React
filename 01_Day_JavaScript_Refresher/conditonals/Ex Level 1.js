const age = prompt("Enter your age: ");
if (age < 18) {
  console.log("You are not allowed to drive.");
} else if (age >= 18) {
  console.log(`You are eligible to drive in ${18 - age} years.`);
}

const myAge = 30;
const yourAge = prompt("Enter your age: ");
if (yourAge < myAge) {
  console.log(`You are ${myAge - yourAge} years younger than me.`);
} else if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
}

let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
}

let number = prompt("Enter a number: ");
if (number % 2 == 0) {
  return console.log(`${number}  is an even number `);
} else {
  console.log(`${number} is not an even number`);
}
