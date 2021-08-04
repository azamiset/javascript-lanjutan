// arrow function dengan 2 parameter
const sapaTeman = (nama, waktu) => {
  return `Halo ${nama}, selamat ${waktu}`;
}
console.log(sapaTeman('Riki', 'pagi'));


// arrow function 1 parameter / implisit return
const tampilNama = nama => `Halo, ${nama}`;
console.log(tampilNama('Dani'));


// arrow function tanpa parameter
const panggil = () => `Hello WOrld`;
console.log(panggil());


// contoh penggunaan arrow function
let mahasiswa = ['Shandika Galih', 'Doddy Ferdiansyah', 'Erik'];

let jumlahHuruf1 = mahasiswa.map(function (nama) {
  return nama.length;
});
console.log(jumlahHuruf1);

let jumlahHuruf2 = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf2);

let jumlahHuruf3 = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf3);