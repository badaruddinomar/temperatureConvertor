`use strict`;

// * selector
const btnCTF = document.querySelector(`.btnCTF`);
const btnFTC = document.querySelector(`.btnFTC`);
const btnReset = document.querySelector(`.btnReset`);

const celsius1 = document.querySelector(`.cel1`);
const fahrenheit1 = document.querySelector(`.fah1`);

const celsius2 = document.querySelector(`.cel2`);
const fahrenheit2 = document.querySelector(`.fah2`);

// * convert celsius to fahrenheit - eventListener
btnCTF.addEventListener(`click`, function () {
  let celsiusValue = Number(celsius1.value);
  let f = (9 * celsiusValue + 160) / 5;
  fahrenheit1.value = f;
});
// * convert fahrenheit to celsius - eventListener
btnFTC.addEventListener(`click`, function () {
  let fahrenheitValue = Number(fahrenheit2.value);
  let c = ((fahrenheitValue - 32) * 5) / 9;
  celsius2.value = c;
});
// * btnResetListener
btnReset.addEventListener(`click`, function () {
  celsius1.value = "";
  fahrenheit1.value = "";
  celsius2.value = "";
  fahrenheit2.value = "";
});
