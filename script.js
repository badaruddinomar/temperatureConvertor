// SELECTOR----
const result = document.querySelector(`.result`);
const inputFah = document.querySelector(`.fah-val`);
const inputCel = document.querySelector(`.cel-val`);

const celBtn = document.querySelector(`.cel-btn`);
const fahBtn = document.querySelector(`.fah-btn`);
const resetBtn = document.querySelector(`.reset`);

// --------------------------------------------------
inputFah.value = ``;
inputCel.value = ``;
// FUNCTIONS-------
// CELCIUS TO FAHRENHEIT CONVERTION--------
celBtn.addEventListener(`click`, function () {
  const celVal = +inputCel.value;
  const fahFormula = (9 * celVal + 160) / 5;
  result.textContent = `${fahFormula.toFixed(2)}℉`;
  inputCel.value = ``;
});
// FAHRENHEIT TO CELCIUS CONVERTION-----------
fahBtn.addEventListener(`click`, function () {
  const fahVal = +inputFah.value;
  const celFormula = ((fahVal - 32) * 5) / 9;
  result.textContent = `${celFormula.toFixed(2)}℃`;
  inputFah.value = ``;
});
// RESETING THE INPUT VALUE AND THE RESULT ----------
resetBtn.addEventListener(`click`, function () {
  inputFah.value = ``;
  inputCel.value = ``;
  result.textContent = `Result: `;
});
