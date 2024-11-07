const formatSwitch = document.querySelector(".format-btn");
const format = (document = document.querySelector(".format"));
const p = document.querySelector(".period");

formatSwitch.addEventListener("click", () => {
  formatSwitch.classList.toggle("active");

  var formatValue = formatSwitch.getAttribute("data-format");
  if (formatValue === "12") {
    formatSwitch.setAttribute("data-format", "24");
    format.innerHTML = "12-hour format";
    p.style.display = "none";
  } else {
    formatSwitch.setAttribute("data-format", "12");
    format.innerHTML = "24-hour format";
  }
});

let currDate = new Date();

function clock() {
  var today = new Date();

  var hours = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  if (hours >= 12) {
    period = "PM";
  }

  var formatValue = formatSwitch.getAttribute("data-format");
  if (formatValue === "12") {
    hours = hours > 12 ? hours % 12 : hours;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.querySelector(".hrs").innerHTML = hours;
  document.querySelector(".min").innerHTML = min;
  document.querySelector(".sec").innerHTML = sec;
  document.querySelector(".period").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);

var today = new Date();
const date = today.getDate();
const year = today.getFullYear();
const day = today.toLocaleString("default", { weekday: "long" });
const month = today.toLocaleString("default", { month: "short" });

document.querySelector(".month-name").innerHTML = month;
document.querySelector(".day-name").innerHTML = day;
document.querySelector(".day-number").innerHTML = date;
document.querySelector(".year").innerHTML = year;

const dotMenu = document.querySelector(".dot-menu");
const dotMenuItems = document.querySelector(".dot-menu-items");

dotMenu.addEventListener("click", () => {
  dotMenuItems.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") {
    dotMenuItems.classList.remove("active");
  }
});
