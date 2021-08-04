// ~ REFACTORING - Penyederhanaan kode program ~
//  function jumlahVolumeDuaKubus(a, b) {
// 	return a * a * a + b * b * b;
// }

// alert(jumlahVolumeDuaKubus(8, 3));
// ~ end REFACTORING ~



// ~ REKRUSIF - function yang memanggil dirinya sendiri ~
// contoh 1:
// function tampilAngka(n) {
// 	console.log(n);
// 	return tampilAngka(n-1);
// }

// tampilAngka(10);


// contoh 2 - base case / perbaikan:
// function tampilAngka(n) {
// 	if (n === 0 ) return;
// 	console.log(n);
// 	return tampilAngka(n-1);
// }

// tampilAngka(10);
// ~ end REKRUSIF ~



// ~ FACTORIAL ~
function factorial(n) {
	if (n === 0) return 1;
	return n * factorial(n-1);
}

var hasil = factorial(5);

console.log(hasil);
// ~ end FACTORIAL ~