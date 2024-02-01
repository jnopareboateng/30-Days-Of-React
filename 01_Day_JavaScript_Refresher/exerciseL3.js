let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort((a, b) => a - b); // sort in ascending order
const minAge = Math.min(...sortedAges);
const maxAge = Math.max(...sortedAges);
let medianAge; 
let meanAge;

function calculateMeanAge(){
    let sum = 0;
    for (let i = 0; i < sortedAges.length; i++){
        sum += sortedAges[i];
    }
    meanAge = sum / sortedAges.length;
}

function calculateMedianAge(){
    const mid = Math.floor(sortedAges.length / 2);
    if (sortedAges.length % 2 == 0){
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

const countries = require('countries.js');
const firstTenCountries = countries.slice(0,countries.lenth -1);

if (countries.length % 2 == 0){
    coonsole.log(`even number of countries.`)
    const firstHalf = coutries.slice(0,(countries.length -1 /2))
} else {
    countries.push('Ghana')
}

