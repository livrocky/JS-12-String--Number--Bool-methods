/* <p id="nr">20, 50, 60, 0, -42, -2, 100</p> */
/* <p id="one">500</p> */

// paimti reiksme is p#one ir prie jos prideti 100 ir gauti rezultata

const NumArr = document.getElementById("nr");
const pOne = document.getElementById("one");

const result = +pOne.textContent + 100;
console.log(result);

// paimti reiksme is ivesties lauko ir prideti 50
const inputEl = document.getElementById("favourite");
// atsakyma isvesti i nauja el po input
const pEl = document.createElement("p");
pEl.textContent = +inputEl.value + 50;
inputEl.after(pEl);
// atsakyma atnaujinti kei keiciasi reikme ivesties lauke

// pagaminti masyva is
// <p id="nr">20, 50, 60, 0, -42, -2, 100</p> el reiksmiu
const pStringEl = document.getElementById("nr");
const pElStringValue = pStringEl.textContent;
console.log("pElStringValue===", pElStringValue);
const arrayFromString = pElStringValue.split(", ");
console.log("arrayFromString===", arrayFromString);

// masyvo reiksmes padvigubinti ir ikelti i nauja paragrafa po esamu
const doubleArr = [];
//sukti cikla per masyva
for (let i = 0; i < arrayFromString.length; i++) {
  const element = arrayFromString[i];
  const doubleSkValue = element * 2;
  doubleArr.push(doubleSkValue);
}
console.log("DoubleArr===", doubleArr);

const pResultEl = document.createElement("p");
pResultEl.textContent = doubleArr.join(", ");
// pResultEl.textContent = { userName: 'james' };
pStringEl.after(pResultEl);

//// suapvalinti 8.5471 iki 2 skaiciu po kablelio

const val = 8.5471;
const apvalinta = val.toFixed(2);
console.log("apvalinta ===", apvalinta);
console.log("apvalinta ===", typeof apvalinta);

const mixedArray = [5, "blue", true, false, "Mike", 10, "50", 0, -1, "age"];
// atrinkti i atskirus masyvus visus
// string tipo duomenis
// boolean tipo duomenis
// skaiciu tipo duomenis

// gauti skaiciu tipo duomenu vidurki
// isitikinti kad suskaiciuota ir atrinkta teisingai
