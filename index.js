const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const body = document.querySelector("body");
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  startBtn.setAttribute("disabled", "");
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.removeAttribute("disabled", "");
});
