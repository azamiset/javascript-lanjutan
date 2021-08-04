// ~ contoh 1 ~
function tambah(a, b) {
  return a + b;
}

var penjumlahan = tambah(1, 2);

console.log(penjumlahan);
// ~ end contoh 1 ~



// ~ contoh 2 ~
function kali(a, b) {
  return a * b;
}

var perkalian = kali(3, 4);

console.log(perkalian);
// ~ end contoh 2 ~



// ~ contoh 3 ~
var hasil = kali(penjumlahan, perkalian);

console.log(hasil);
// ~ end contoh 3 ~



// ~ contoh 4 ~
function arrayTambah() {
  var hasil = 0;

  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var coba = arrayTambah(12, 25, 37, 49);

console.log(coba);
// ~ end contoh 4 ~