// Pencarian pada Array

{
	// 1. filter : untuk menemukan banyak nilai (array)
	var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
	var angka2 = angka.filter(function (x) {
		return x > 5;
	})
	console.log(angka2.join(' - '));
}

{
	// 2. find : untuk menemukan satu nilai
	var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
	var angka2 = angka.find(function (x) {
		return x > 5;
	})
	console.log(angka2);
}