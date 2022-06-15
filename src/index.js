import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const countModifier = (count = 0, action) => {
  // console.log(count, action);
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type ==="MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange)

const handlePlus = () => {
  countStore.dispatch({type: "PLUS"});
}

const handleMinus = () => {
  countStore.dispatch({type: "MINUS"});
}

console.log(countStore.getState());

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);