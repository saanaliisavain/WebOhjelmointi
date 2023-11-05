class Henkilo {
  constructor(en, sn, kn, sv) {
    this._etunimi = en;
    this._sukunimi = sn;
    this._kutsumanimi = kn;
    this._syntymavuosi = new Date(sv);
  }

  set etunimi(eNimi) {
    this._etunimi = eNimi;
  }
  get etunimi() {
    return this._etunimi;
  }

  set sukunimi(sNimi) {
    this._sukunimi = sNimi;
  }
  get sukunimi() {
    return this._sukunimi;
  }

  set kutsumanimi(kNimi) {
    this._kutsumanimi = kNimi;
  }
  get kutsumanimi() {
    return this._kutsumanimi;
  }

  set syntymavuosi(vuosi) {
    this._kutsumanimi = vuosi;
  }
  get syntymavuosi() {
    return this._syntymavuosi;
  }

  toString() {
    var toString =
      "ETUNIMI: " +
      this._etunimi +
      "\nSUKUNIMI: " +
      this._sukunimi +
      "\nKUTSUMANIMI: " +
      this._kutsumanimi +
      "\nSYNTYMÄVUOSI: " +
      this._syntymavuosi;
    return toString;
  }
}

module.exports = Henkilo;
