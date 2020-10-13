// DATE AND TIME VARIABLES
var date, year, month, day, hours, minutes, seconds, ampm, time;
// MONTHS ARRAY
var months = [
  "January",
  "February",
  "Mararch",
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
// DATE ARRAY
var days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

function myDateTime() {
  // SETTING DATE AND TIME

  // making instance of date object
  date = new Date();

  // getting full year
  year = date.getFullYear();

  //  gettting current months value
  month = date.getMonth();

  // getting current date value
  day = date.getDate();

  // getting current hours value
  hours = date.getHours();

  // getting current minutes value
  minutes = date.getMinutes();

  // getting current seconds value
  seconds = date.getSeconds();

  // setting 12 hours
  hours = hours % 12;

  // evaluating am or pn based on hour we get
  ampm = 12 ? "PM" : "AM";
  // getting full time value

  // FULL TIME
  time = hours + " : " + minutes + " : " + seconds + "-" + ampm;
}

// FOR HEADER
window.setInterval(timeDate, 1000);
function timeDate() {
  myDateTime();
  document.querySelector("#current-time span").innerHTML = time;
  document.querySelector("#current-date span").innerText =
    months[month] + "  " + year;
}

// setting up days
myDateTime();
var actMonth = month;

function calendar() {
  date.setDate(1);
  date.setMonth(actMonth);

  var allDays = "";
  var monthDays = document.querySelector(".week ul");

  const firstDayIndex = date.getDay();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  for (let x = firstDayIndex; x > 0; x--) {
    allDays += `<li class="prevDate"> ${prevLastDay - x + 1}</li>`;
  }

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      allDays += `<li class="today">${i}</li>`;
    } else {
      allDays += `<li>${i}</li>`;
    }
  }

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  for (let j = 1; j <= nextDays; j++) {
    allDays += `<li class="next-date">${j}</li>`;
  }
  monthDays.innerHTML = allDays;
}

// next and prev button on head

myDateTime();

var z = new Date().getMonth();

// prev button

function prev() {
  actMonth = actMonth - 1;
  // actMonth = Math.abs(actMonth);
  if(actMonth<0){
    actMonth=11;

  }
  if (actMonth === z) {
    document.querySelector("#date1").innerText = "Today";
  } else {
    document.querySelector("#date1").innerText = months[actMonth];
  }

  calendar();
}

// next button
function next() {
  actMonth = actMonth + 1;
  actMonth = actMonth % 12;
  if (actMonth === z) {
    document.querySelector("#date1").innerText = "Today";
  } else {
    document.querySelector("#date1").innerText = months[actMonth];
  }
  calendar();
}
document.querySelector(".fa-arrow-circle-left").addEventListener("click", prev);

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", next);


calendar();
