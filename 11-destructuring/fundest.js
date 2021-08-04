// Destructuring function

// Return Value Array
/*
function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}

const [tambah, kurang, kali, bagi, modulus = 'Tidak ada'] = kalkulasi(6, 2);
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);
console.log(modulus);
*/

// return value object
/*
function kalkulasi(a, b) {
  return {
    tambah: a + b, 
    kurang: a - b, 
    kali: a * b, 
    bagi: a / b}
}
const {tambah, kurang, kali, bagi} = kalkulasi(6, 2);
console.log(bagi);
*/

//Destructuring function argument
const mhs = {
  nama: 'Aswad Zami',
  umur: 31,
  email: 'azami@gmail.com',
  nilai: {
    tugas: 80,
    uts: 89,
    uas: 76
  }
}

// Cara 1:
/* 
function cetakMhs(nama, umur) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}
console.log(cetakMhs(mhs.nama, mhs.umur)); 
*/

// cara 2:
/* 
function cetakMhs(mhs) {
  return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
}
console.log(cetakMhs(mhs));
 */

// cara 3:
/* 
function cetakMhs({ nama, umur }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}
console.log(cetakMhs(mhs)); 
*/

// cara 4:
/* 
function cetakMhs({ nama, umur, nilai }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${nilai.uas}.`;
}
console.log(cetakMhs(mhs));
 */

// cara 5:
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}
console.log(cetakMhs(mhs));