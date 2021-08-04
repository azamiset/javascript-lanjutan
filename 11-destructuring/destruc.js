// Destruturing Variabel / assigment

// 1. Destructuring Array
/*
// reguler
const perkenalan = ['halo', 'nama', 'saya', 'Aswad Zami']
const [salam, satu, dua, nama] = perkenalan
console.log(dua);

// otomatis
const [sapa, , , panggilan] = perkenalan
console.log(panggilan);
*/

// 2. Swap Item
/*
let a = 1
let b = 2
console.log(a);
console.log(b);
[a, b] = [b, a]
console.log(a);
console.log(b);
*/

// return value pada function
/*
function coba() {
  return [1, 2];
}
const <div a,="" b=""></div> = coba();
console.log(a);
*/

// Rest Parameter
/*
const [a, ...b] = [1, 2, 3, 4, 5]
console.log(a);
console.log(b);
*/


// 2. Destructuring Object

// Deklarasi Object
/*
const mhs = {
  nama: 'aswad zami',
  umur: 31
}

const { nama, umur } = mhs;
console.log(nama);
*/

// Assigment tanpa declaration object
/*
({ nama, umur } = { nama: 'Wandy Azami', umur: 31 })
console.log(nama);
*/

// Assign ke variabel baru
/*
const mhs = {
  nama: 'aswad zami',
  umur: 31
}

const { nama: n, umur: u } = mhs;
console.log(u);
*/

// memberikan default value
/*
const mhs = {
  nama: 'aswad zami',
  umur: 31
}

const { nama: n, umur: u, email:e = 'aswad@gmail.com' } = mhs;
console.log(e);
*/

// Rest Parameter
/*
const mhs = {
  nama: 'aswad zami',
  umur: 31,
  email: 'aswad@gmail.com'
}

const { nama, ...values } = mhs;
console.log(values);
*/

// field pada object di parameter function
const mhs = {
  id: 123,
  nama: 'aswad zami',
  umur: 31,
  email: 'aswad@gmail.com'
}

function getId({ id }) {
  return mhs.id;
}

console.log(getId(mhs));














