// mencari angka yan >= 3
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// menggunakan for
/*
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);

  }
}
console.log(newAngka);
*/

// menggunakan filter
/*
const newAngka = angka.filter(a => a >= 3)
console.log(newAngka);
*/

// map
/*
const newAngka = angka.map(a => a * 2)
console.log(newAngka);
*/

// reduce
// jumlahkan seluruh elemen pada array
/*
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(newAngka);
*/


// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 8, 9, 9
  .map(a => a * 3) // 24, 27, 27
  .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);


















