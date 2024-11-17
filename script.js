const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const toggleFormatButton = document.getElementById("toggleFormat");

let is24HourFormat = false;

function updateClock() {
  const now = new Date();

  // Format time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (!is24HourFormat) {
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    timeElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${amPm}`;
  } else {
    timeElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  // Format date
  const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = now.toLocaleDateString(undefined, dateOptions);
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

// Toggle between 12-hour and 24-hour format
toggleFormatButton.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  toggleFormatButton.textContent = is24HourFormat ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
  updateClock();
});

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock
updateClock();
