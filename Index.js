const Urheilija = require("./Urheilija");
const Henkilo = require("./Henkilo");

//Tämä on ns. pääohjelma
//Täällä tehdään kaksi urheilija oliota

let urheilija1 = new Urheilija(
  "Nooralotta",
  "Neziri",
  "Norppis",
  "1991",
  "https://fi.wikipedia.org/wiki/Nooralotta_Neziri#/media/Tiedosto:Nooralotta_Neziri-20130721-Lapinlahti-SavoGames_RMJ0588.jpg",
  63,
  "Pikajuoksija",
  "Suomen mestari 2012-2016, 2018"
);
console.log(urheilija1);

let urheilija2 = new Urheilija(
  "Lotta",
  "Harala",
  "Lottavaan",
  "1992",
  "https://www.iltalehti.fi/yleisurheilu/a/b57551f9-0be9-4391-9be3-39cde73e6dd8",
  56,
  "Aitajuoksija",
  "Suomen mestari 2017, pika-aitojen hopea 2023"
);

//Täällä tulostetaan urheilijat

console.log(urheilija2);
