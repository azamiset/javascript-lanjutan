 // Mebuat Object
 // 1. object Literal
 var mhs1 = {
 	nama : 'wandy',
 	nrp: 12345567,
 	email: 'wandy@gmail.com',
 	jurusan: 'Teknik Informatika'
 }
 console.log(mhs1);

 // 2. Function Declaration
 function buatObjectMahasiswa(nama, nrp, email, jurusan) {
 	var mhs = {};
 	mhs.nama = nama;
 	mhs.nrp = nrp;
 	mhs.email = email;
 	mhs.jurusan = jurusan;
 	return mhs;
 }
 var mhs2 = buatObjectMahasiswa('azami', 2133224, 'azami@gmail.com', 'Teknik Mesin');
 console.log(mhs2);

// 3. Contructor function
 function Mahasiswa(nama, nrp, email, jurusan) {
 
 	this.nama = nama;
 	this.nrp = nrp;
 	this.email = email;
 	this.jurusan = jurusan;

 }
 var mhs3 = new Mahasiswa('vanissa', 5446477, 'vanissa@gmail.com', 'Teknik Sipil');
 console.log(mhs3);