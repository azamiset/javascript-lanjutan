// Error Handling

// ambil tombol search
const searchButton = document.querySelector('.search-button');
// Ketika tombol search diklik
searchButton.addEventListener('click', async function () {
  try {
    // ambil tag input
    const inputKeyword = document.querySelector('.input-keyword');
    // ketika tag input diketik, masukan isinya kedalam function getMovies()
    const movies = await getMovies(inputKeyword.value);
    // tampilkan tag hmtl ke browser
    updateUI(movies);
  } catch (error) {
    alert(error);
  }
});

// event binding (saat loyor kosong / data dan tombol detail belum muncul)
document.addEventListener('click', async function (e) {
  // ketika elemen yang diklik adalah tombol detail
  if (e.target.classList.contains('modal-detail-button')) {
    const imdbid = e.target.dataset.imdbid;
    // ketika data imdbid ditemukan, masukan kedalam function getMovieDetail()
    const movieDetail = await getMovieDetail(imdbid);
    // tampilkan tag html ke browser
    updateUIDetail(movieDetail);
  }
});