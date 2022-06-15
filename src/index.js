const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

number.innerText = count

function updateText() {
  number.innerText = count
}

function handlePlus() {
  count = count + 1;
  updateText()
}

function handleMinus() {
  count = count - 1;
  updateText()
}

plus.addEventListener("click",handlePlus)
minus.addEventListener("click",handleMinus)