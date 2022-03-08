//nusitaikom i el su id replace

const replaceStringEl = document.getElementById("replace");
console.log(replaceStringEl);

//paimti paskutinius 6 simbploius ir irasyti juos i paragrafa einanti po dabartinio paragrafo.

const pask6simb = replaceStringEl.textContent.slice(-6);
console.log("pask6simb===", pask6simb);

const parEl = document.createElement("p");
parEl.textContent = pask6simb;
document.body.append(pask6simb);

// is replaceStringEl teksto paimti zodeli cat ir ji ikelti i papildoma h3 el po paskutiniu el.

const catEl = replaceStringEl.textContent.slice(8, 11);
console.log(`catEl===>`, catEl);
const h3El = document.createElement("h3");
h3El.textContent = catEl;
document.body.append(catEl);

// const catElSubStr = replaceStringEl.textContent.substr(8 - 3); (MAZAI NAUDOJAMAS)

//pakeisti street i building//

const text = "The fat cat ran down the street. It was searching for a mouse to eat";
const newtext = text.replace("street", "building");
h3El.textContent = newtext;

// sukurti dar viena paragrafa po paskutiniu el ir jame turi buti visas sakinys didziosiomis raidemis//

const parEl2 = document.createElement("p");
const text1 = newtext;
const text2 = text1.toUpperCase();
parEl2.append(text2);
document.body.append(parEl2);

//// gauti pirma sakinio raide (ne su slice ir ne su substring ar substr)//

const parEl3 = document.createElement("p");
const text3 = newtext;
const char = text3.charAt(0);
parEl3.append(char);
document.body.append(parEl3);

// paversti sakini i masyva kuriame kiekvienas elementas yra zodis .split

const zdzMasyvas = replaceStringEl.textContent.split(" ");
console.log("zdzMasyvas===", zdzMasyvas);

const parEl4 = document.createElement("p");
parEl4.textContent = zdzMasyvas.join(" || ");
document.body.append(parEl4);

//// visa sakini parasyti naujame paragrafe is priesingos puses dabartinei tvarkai.

//gauti reiksme ir reiksmes ilgi i console:
// {
/* <input type="text" id="inp" value="labas"> */
// }

const inputEl = document.getElementById("inp");
const inpValue = inputEl.value;
const inpValueIlgis = inputEl.value.length;
console.log("inpValue ===", inpValue);
console.log("inpValueIlgis ===", inpValueIlgis);
// ar ilgis yra 5 ?
console.log("labas" === inpValue.trim());

// suzinoti ar reiksme nuemus tarpus is sonu yra lygi 'lAbAs' reiksmei sumazinus raides iki mazuju raidziu

const inputValueP = inputEl.value.trim().toLowerCase();
const compareValue = "lAbAs ".toLowerCase().trim();
console.log("compareValue ===", compareValue);
