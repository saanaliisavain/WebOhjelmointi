const express = require("express");
const fs = require("fs"); //fs-kirjasto

const app = express();

const port = 3000;

let sanakirja = [];

const data = fs.readFileSync("./sanakirja.txt", {
  encoding: "utf8",
  flag: "r",
});

//jaetaan merkkijono rivin vaihtojen perusteella:
const splitLines = data.split(/\r?\n/);

//jaetaan yhden rivin merkkijono kahteen osaan välilyöntien perusteella
splitLines.forEach((line) => {
  const sanat = line.split(" ");

  const sana = {
    fin: sanat[0],
    eng: sanat[1],
  };

  sanakirja.push(sana);
});

console.log(sanakirja);

app.use(express.json()); //käytetään json-muotoista dataa

app.use(express.urlencoded({ extended: true })); //käytetään tiedonsiirrossa laajennettua muotoa

app.use(function (req, res, next) {
  //Sallitaan web-yhteydet kaikenlaisilta sivustoilta
  res.setHeader("Access-Control-Allow-Origin", "*");

  //metodit, mitä sallitaan
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  //muoto eli minkälaisia kutsuja
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-requested-With, X-CSRF-Token"
  );

  res.setHeader("Access-Control-Allow-Credenials", true); //tämä liittyi kekseihin
  //res.setHeader("Content-type", "application.json"); //
  res.setHeader("Content-Type", "application/json");

  next();
});

app.get("/sanakirja", (req, res) => {
  res.json(sanakirja);
});

//Tähän kohtaan tulee lisääminen, jossa käytetään req.bodya eli pyynnön bödy
//req on pyyntö ja res on vastaus

app.post("/sanakirja", (req, res) => {
  const merkkijono = req.body; // Oletetaan, että POST-pyynnössä on lähetetty sanakirjan uusi sana objektina
  sanakirja.push(merkkijono); // Lisätään uusi sana sanakirjaan
  res.json(sanakirja); // Palautetaan päivitetty sanakirja JSON-muodossa
});

/*app.listen(3000, () => {
  console.log("serveri päällä portissa 3000");
});*/

app.listen(port, () => {
  console.log(`Kuunnellaan portissa ${port}`);
});
