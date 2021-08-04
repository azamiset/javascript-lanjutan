// Cara membuat method prototype dalam object dengan constractor function

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamt makan!`;
}

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamt bermain!`;
}

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamt tidur!`;
}

let shandika = new Mahasiswa('shandika', 30);


// prototype inheritance versi class
class Siswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

let azami = new Siswa('azami', 20);
let dany = new Siswa('dany', 40);