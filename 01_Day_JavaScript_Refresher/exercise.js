// Exercise 1

// Question 1
const emptyArray = Array(null);
console.log(emptyArray);

// Question 2
const arrayOfFive = Array(5);
console.log(arrayOfFive);

// Question 3
const arrayLength = arrayOfFive.length;
console.log(arrayLength);

// Question 4
console.log(arrayOfFive[0]);
console.log(arrayOfFive[2]);
console.log(arrayOfFive[4]);

// Question 5
const mixedDataTypes = [
  [1, 2, 3, 4, 5],
  ["Boys", "Girls", "Nan"],
  [True, False],
];
console.log(mixedDataTypes.length);

//Question 6
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//Question 7
console.log(itCompanies);

// Question 8
console.log(itCompanies.length);

// Question 9
console.log(itCompanies[0]);

// Question 10
for (i = 0; (i = itCompanies.length); ) {
  console.log(itCompanies[i]);
}

//Question 11
itCompanies = [
  "FACEBOOK",
  "GOOGLE",
  "MICROSOFT",
  "APPLE",
  "IBM",
  "ORACLE",
  "AMAZON",
];
console.log(itCompanies);

// Question 12
let sentence = itCompanies.split() + "are big IT companies";

// Question 13
let j; // name of company
for (i = 0; i <= itCompanies.length; ) {
  if (itCompanies[i] == j) {
    return alert(itCompanies[i] + " exists");
  } else {
    return alert(itCompanies[i] + " not found");
  }
}
// alternate.
for (i = 0; i <= itCompanies.length; ) {
  if (itCompanies[i].includes(j)) {
    return alert(itCompanies[i] + " exists");
  } else {
    return alert(itCompanies[i] + " not found");
  }
}

// Question 14

let filteredList = itCompanies.filter();
console.log(filteredList);

// Question 15
console.log(itCompanies.sort());

// Question 16
console.log(itCompanies.reverse());

// Question 17
console.log(itCompanies.slice(0, 2));

// Question 18
console.log(itCompanies.slice(itCompanies.length, itCompanies.length - 3));

// Question 19
console.log(itCompanies.slice((array.length - 1) / 2));

// Question 20

console.log(itCompanies.shift())

// Question 21
console.log(console.log(itCompanies.splice(2,1)))


//Question 22
console.log(itCompanies.pop())

// Question 23

console.log(itCompanies.splice(0, itCompanies.length))


