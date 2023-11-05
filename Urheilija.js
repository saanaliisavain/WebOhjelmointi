const Henkilo = require("./Henkilo");

class Urheilija extends Henkilo {
  constructor(en, sn, kn, sv, linkkiKuvaan, omapaino, laji, saavutukset) {
    super(en, sn, kn, sv);

    this._linkkiKuvaan = linkkiKuvaan;
    this._omapaino = omapaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }
  set linkkikuvaan(arvo) {
    this._linkkikuvaan = arvo;
  }
  get linkkikuvaan() {
    return this._linkkikuvaan;
  }

  set omapaino(arvo) {
    this._omapaino = arvo;
  }

  //_omapaino
  get omapaino() {
    return this._omapaino;
  }
  set laji(arvo) {
    this._laji = arvo;
  }
  //_laji
  get laji() {
    return this._laji;
  }

  set saavutukset(arvo) {
    this._saavutukset = arvo;
  }
  //_saavutukset
  get saavutukset() {
    return this._saavutukset;
  }

  toString() {
    var tulostetaan =
      "\nLINKKI: " +
      this._linkkiKuvaan +
      "\nLAJI: " +
      this._laji +
      "\nSAAVUTUKSET: " +
      this._saavutukset;

    return super.toString() + " " + toString;
  }
}

module.exports = Urheilija;
