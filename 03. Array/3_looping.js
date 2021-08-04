// Looping pada Array
{
	// 1. forEach : Loping yang Mengembalikan nilai string
	var angka = [1, 2, 3, 4, 5, 6, 7, 8];
	for (var i = 0; i < angka.length; i++) {
		console.log(angka[i]);
	}

	angka.forEach(function (e) {
		console.log(e);
	});
}

{
	var nama = ['wandy', 'azami', 'vanissa', 'fajar'];
	nama.forEach(function (e, i) {
		console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
	})
}

{
	// 2. map : Loping yang Mengembalikan nilai array baru
	var angka = [1, 2, 5, 3, 6, 8, 4];
	var angka2 = angka.map(function (e) {
		return e * 2;
	})
	console.log(angka2.join(' - '));
}

{
	// 3. sort : mengurutkan nilai dalam array
	var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
	angka.sort(function (a, b) {
		return a - b;
	})
	console.log(angka.join(' - '));
}