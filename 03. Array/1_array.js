// Manipulasi Array

{
	// 1. menambahkan isi array
	var arr = [];
	arr[0] = 'wandy';
	arr[1] = 'azami';
	arr[2] = 'vanissa';
	arr[6] = 'fajar';

	console.log(arr);
}

{
	// 2. menghapus array
	var arr = ['wandy', 'azami', 'vanissa'];
	arr[1] = undefined;

	console.log(arr);
}

{
	// 3. menampilkan array;
	var arr = ['wandy', 'azami', 'vanissa', 'fajar'];

	for (var i = 0; i < arr.length; i++) {
		console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
	}
}