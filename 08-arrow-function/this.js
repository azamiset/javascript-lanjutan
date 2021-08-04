// Konsep this pada arrow function

// Contructor function
/* 
const Mahasiswa = function () {
  this.nama = 'Shandika';
  this.umur = 33;
  this.sayHello = function () {
    console.log(`Halo saya ${this.nama}, dan saya ${this.umur} tahun`);
  }
}

const shandika = new Mahasiswa();
 */

// arrow function pada contractor function
/*
const Mahasiswa = function () {
  this.nama = 'Shandika';
  this.umur = 33;
  this.sayHello = () => {
    console.log(`Halo saya ${this.nama}, dan saya ${this.umur} tahun`);
  }
}

const shandika = new Mahasiswa();
*/

// arrow function tidak bisa digunakan dalam object literal

const mhs1 = {
  nama: 'Shandika',
  umur: 32,
  sayHello: () => `Halo saya ${this.nama}, dan saya ${this.umur} tahun`

}

console.log(mhs1.sayHello());


