const month = prompt(`Please enter the name of a month`)
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  


// function getDaysInMonth(month){
//     if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December"){
//         return `${month} has 31 days`
//     } else if (month === "April" || month === "June" || month === "September" || month === "November"){
//         return `${month} has 30 days`
//     } else if (month === "February"){
//         return `${month} has 28 days`
//     } else {
//         return "Invalid month"
//     }
// }


function getDaysInMonth(month) {
    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase(); // Normalize the month input
    let year = new Date().getFullYear(); // Get the current year
    let monthIndex = new Date(Date.parse(month +" 1,"+ year)).getMonth() + 1; // Get the month index
    return new Date(year, monthIndex, 0).getDate();
}

let days = getDaysInMonth(month);
console.log(`${month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()} has ${days} days.`); // Output the result


// month input
month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase() // normalized input
let year = new Date().getFullYear
let monthIndex = new Date(Date.parse(month + "1,"+ year)).getMonth() +1
return new Date(year,monthIndex, 0).getDate()

console.log(`${month} has `)