//JS BOOLEAN METODAI

const isLegalAge = true;
console.log(isLegalAge);
console.log(isLegalAge.toString());

//JS NUMBER METODAI

//1. Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

//2. Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

// const milkPrice = 1.2999;
// console.log("milkPrice===", milkPrice);
// if (Number.isInteger(milkPrice) === true) {
//   alert(`Pieno kaina ${milkPrice.toFixed(2)} eur, centų nereikės!`);
// } else {
//   alert(`Pieno kaina ${milkPrice.toFixed(2)} eur, centų reikės!`);
// }

//3. Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

const buttonEl = document.getElementById("calculate");
const formEl = document.querySelector("form");
const displayEl = document.createElement("h1");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const gasPriceEl = Number(document.getElementById("price").value);
  const gasQuantityEl = Number(document.getElementById("quantity").value);
  const resultEl = gasPriceEl * gasQuantityEl;
  console.log(resultEl);

  displayEl.textContent = `${resultEl.toFixed(2)} Eur`;
  document.body.append(displayEl);
});
