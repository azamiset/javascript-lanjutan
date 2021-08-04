// Gunakan fungsi parseInt() untuk mengubah string menjadi integer
// Gunakan popup prompt() untuk mengambil string angka dari user
var noAngkot = parseInt(prompt('Masukan nomor angkot yang anda cari!'));

switch (noAngkot) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 6:
    alert('Angkot yang anda cari sedang beroperasi');
    break;
  case 5:
  case 8:
  case 10:
    alert('Angkot yang anda cari sedang lembur');
    break;
  case 7:
  case 9:
    alert('Angkot yang anda cari sedang dalam perbaikan');
    break;
  default:
    alert('Nomor yang anda masukan salah');
    break;
}