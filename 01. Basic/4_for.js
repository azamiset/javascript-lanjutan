// ~ contoh 1 ~
// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
// 	console.log('hello world ' + nilaiAwal + ' x');
// }
// ~  end contoh 1 ~


// ~ contoh 2 ~
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');

  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}
// ~ end contoh 2 ~