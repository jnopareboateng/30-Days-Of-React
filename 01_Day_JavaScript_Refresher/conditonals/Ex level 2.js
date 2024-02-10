// Question 1
grade = prompt("Please enter your grade");

switch (grade) {
  case grade >= 80:
    console.log(A);
    break;
  case (grade >= 70) & (grade < 80):
    console.log(B);
    break;
  case (grade >= 60) & (grade < 70):
    console.log(C);
    break;
  case (grade >= 50) & (grade < 60):
    console.log(D);
    break;
  case grade < 50:
    console.log(F);
}

// Question 2
function typeOfSeason(month) {
  const month = prompt("Please input the month");

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

  const autumn = ["September", "October", "November"];
  const winter = ["December", "January", "February"];
  const spring = ["March", "April", "May"];
  const summer = ["June", "July", "August"];

  for (i = 0; i < months.length; i++) {
    switch (true) {
      case months[i] == autumn[i]:
        console.log(`Season is Autumn`);
        break;
      case months[i] == winter[i]:
        console.log(`Season is winter`);
        break;
      case months[i] == spring[i]:
        console.log(`Season is spring`);
        break;
      case months[i] == summer[i]:
        console.log(`Season is summer`);
        break;
      default:
        console.log(`Please provide the month in the correct format.`);
    }
  }
}

// Question 3
function dayOfTheWeek(day) {
  const day = prompt(`Please input the day of the week`);

  const workDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const weekEnd = ["Saturday", "Sunday"];
  const days = workDay.concat(weekEnd);

  for (i = 0; i < days.length; i++)
    switch (True) {
      case day == workDay[i]:
        console.log(`${day} is a working day`);
        break;
      case day == weekEnd[i]:
        console.log(`${day} is a weekend`);
      default:
        console.log(`Please input the day of the week`);
    }
}


