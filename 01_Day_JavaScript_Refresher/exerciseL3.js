let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort((a, b) => a - b); // sort in ascending order
const minAge = Math.min(...sortedAges);
const maxAge = Math.max(...sortedAges);
let medianAge;
let meanAge;

function calculateMeanAge() {
  let sum = 0;
  for (let i = 0; i < sortedAges.length; i++) {
    sum += sortedAges[i];
  }
  meanAge = sum / sortedAges.length;
}

function calculateMedianAge() {
  const mid = Math.floor(sortedAges.length / 2);
  if (sortedAges.length % 2 == 0) {
    medianAge = (sortedAges[mid - 1] + sortedAges[mid]) / 2;
  } else {
    medianAge = sortedAges[mid];
  }
}

calculateMeanAge();
calculateMedianAge();

console.log(`Min Age: ${minAge}`);
console.log(`Max Age: ${maxAge}`);
console.log(`Mean Age: ${meanAge}`);
console.log(`Median Age: ${medianAge}`);

import countries from "./countries";

let firstTenCountries = countries.slice(0, countries.length);
console.log(`First Ten Countries: ${firstTenCountries}`);

if (countries.length % 2 == 0) {
  console.log(`even number of countries.`);
  const firstHalf = countries.slice(0, (countries.length - 1) / 2);
  console.log(`First Half: ${firstHalf}`);
} else {
  countries.push("Ghana");
}

function middleCountry() {
  return;
  midCount = Math.floor(countries.length / 2);

  console.log(`the middle country is ${midCount}`);
}
