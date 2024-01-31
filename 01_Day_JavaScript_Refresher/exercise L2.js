// Question 1
const countries = require('countries.js')
const web_techs = require('web_techs.js')


// Question 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.split(",").join(" ");
console.log(words);
console.log(words.length);

// Question 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";

// Question 4
console.log(countries.includes('ETHIOPIA'))
function checkEthiopia(){
  if (countries.includes('ETHIOPIA')){
    return
  } else{
    countries.push('ETHIOPIA')
  }
}
