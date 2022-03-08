//1. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

const buttonEl = document.querySelector("button");
const formEl = document.getElementById("form1");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const vardas = document.getElementById("name").value;
  const sk = Number(document.getElementById("number").value);
  if (Number.isInteger(sk) === true) {
    displayEl = document.createElement("h1");
    displayEl.textContent = vardas.repeat(sk) + " ";
    document.body.prepend(displayEl);
  } else {
    alert("Skaičius privalo būti sveikasis!");
  }
});

//2. Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

const formEl2 = document.getElementById("form2");
formEl2.addEventListener("submit", (event) => {
  event.preventDefault;
  const inputEl = document.getElementById("nameLength").value.trim();
  alert(`Vardo raidžių skaičius: ${inputEl.length}`);
});

//3. Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę. Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
