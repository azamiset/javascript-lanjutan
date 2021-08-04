// string literal
const nama = 'Aswad';
const umur = 31;
console.log(`Halo saya ${nama} dan berumur ${umur}`);


// Embedded Expression
console.log(`${1 + 1}`);
// console.log(`${alert('halo')}`);
const x = 11;
console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);


// HTML fragments
const mhs = {
  nama: 'Andy',
  umur: 30,
  nrp: '2646338',
  email: 'andy@gmail.com'
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
