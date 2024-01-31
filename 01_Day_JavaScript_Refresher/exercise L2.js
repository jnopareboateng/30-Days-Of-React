// Question 1
const countries = require('countries.js')
const webTechs = require('web_techs.js')


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

function checkEthiopia(){
  if (countries.includes('ETHIOPIA')){
    console.log("ETHIOPIA")
  } else{
    countries.push('ETHIOPIA')
  }
}

//Question 5

function checkSass(){
  if (webTechs.includes('Sass')){
    console.log("Sass is a CSS preprocess")
  } else{
    webTechs.push('Sass');
    console.log(webTechs)

  }
}

// Question 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)