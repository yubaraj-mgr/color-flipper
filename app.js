const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]; // to change inner html of color.
});
//to get the random color from colors array.
let getRandomNumber = () => {
  const randomColorChoice = Math.floor(Math.random() * colors.length);
  return randomColorChoice;
};
