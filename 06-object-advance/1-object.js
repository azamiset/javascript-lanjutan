// Cara membuat object
// 1. Object Literal
let mahasiswa = {
  nama: 'Sandhika',
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }
}
console.log(mahasiswa);


// 2. function declaration
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }

  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama} selamat bermain!`);
  }

  return mahasiswa;
}

let shandika = Mahasiswa('Shandika', 10);
console.log(shandika);


// 3. constractor function
function Mahasiswa(nama, energi) {

  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama} selamat bermain!`);
  }

}

const aswad = new Mahasiswa('aswad', 25);