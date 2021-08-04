// closure adalah nested atau inner function yang membutuhkan data dari variabel di scope lokal / diluarnya

// closure 1
/* 
function init() {
  let nama = 'sandhika';

  function tampilNama() {
    console.log(nama);
  }

  return tampilNama;
}
let panggilNama = init()
panggilNama();
 */

// closure 2
/* 
function init() {
  let nama = 'sandhika';
  let umur = 33;

  function tampilNama() {
    console.log(nama);
    console.log(umur);
  }

  tampilNama();
}
init();
 */

// closure 3
/* 
function init() {
  return function (nama) {
    console.log(nama);
  }
}

let panggilNama = init()
panggilNama('shandika');
panggilNama('galih');
 */

// closure 4
/* 
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}

let selamatPagi = ucapkanSalam('Pagi')
let selamatSiang = ucapkanSalam('Siang')
let selamatMalam = ucapkanSalam('Malam')

selamatPagi('Frian')
selamatSiang('Eko')
selamatMalam('Erik')
 */

// closure 5 (IIFE)
let add = (function () {
  let counter = 0;

  return function () {
    return ++counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());