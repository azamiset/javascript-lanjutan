// for ..of looping

// 1. array
/*
const mhs = ['sandhika', 'Doddi', 'Erik'];

for (const m of mhs) {
  console.log(m);
}
*/

// 2. string
/*
const nama = 'Shandika';
for (const n of nama) {
  console.log(n);
}
*/

// 3. index pada array
/*
const siswa = ['andi', 'frian', 'eko'];
for (const [i, m] of siswa.entries()) {
  console.log(`${m} adalah mahasiswa ke ${i}`);
}
*/

// 4. nodelist
/*
const liNama = document.querySelectorAll('.nama');
for (const n of liNama) {
  console.log(n);
}
*/

// 5. arguments
function jumlahknAngka() {
  console.log(arguments);

  let jumlah = 0;
  for (const a of arguments) {
    jumlah += a;
  }

  return jumlah;
}
console.log(jumlahknAngka(1, 2, 3, 4, 5));






















