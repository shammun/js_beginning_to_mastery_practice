
const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green}, ${blue})`;
  body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
  button.textContent = body.style.background;
});

console.log(intervalId);

console.log(intervalId);