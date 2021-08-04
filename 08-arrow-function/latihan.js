// Tangkap elemen HTML-nya
const box = document.querySelector('.box');

// Berikan event saat diclick
box.addEventListener('click', function () {
  // simpan nama class htmlnya dalam variabel
  let satu = 'size';
  let dua = 'caption';
  // Periksa apakah sudah berisi nama class
  if (this.classList.contains(satu)) {
    // Tukar nama classnya
    [satu, dua] = [dua, satu];
  }
  // jika belum ada, isi nama classnya / sebaliknya
  this.classList.toggle(satu);
  // setelah 0,6 detik isi nama class / sebaliknya
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
})