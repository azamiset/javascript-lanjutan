// 1. membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function (namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function (namaPenumpang, bayar) {
		if (this.penumpang.length == 0) {
			alert('Angkot masih kosong!');
			return false;
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}
}

var angkot1 = new Angkot('wandy', ['padang', 'pariaman'], [], 0);
var angkot2 = new Angkot('azami', ['sumbar', 'riau'], [], 0);

console.log(angkot1);
console.log(angkot2);

angkot1.penumpangNaik('andy');
angkot1.penumpangNaik('eko');
angkot1.penumpangNaik('frian');
console.log(angkot1);

angkot1.penumpangTurun('eko', 150000);
console.log(angkot1);