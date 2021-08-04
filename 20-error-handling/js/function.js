// promise function atau fetch yang dipanggil di script.js

// ~ 1. input ~
function getMovies(keyword) {
  // lakukan requets ke api omdb, dan isikan inputan user sebagai key 's'
  return fetch('http://www.omdbapi.com/?apikey=21146527&s=' + keyword)
    .then(data => {
      if (!data.ok) {
        throw new Error(data.statusText)
      }
      return data.json();
    })
    .then(data => { 
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      return data.Search;
    });
}

// ~ 2. proses ~
function updateUI(movies) {
  // Buat variabel sementara untuk menyimpan tag html
  let cards = '';
  // isi variabel dengan semua tag html yang dilooping
  movies.forEach(m => cards += showMovie(m));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

// ~ 3. output ~
function showMovie(m) {
  // kirimkan tag html sebagai value
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">See Detail</a>
              </div>
            </div>
          </div>`;
}

//  ~ 1. input ~
function getMovieDetail(imdbid) {
  // lakukan request ke api omdb, sekaligus isikan imdbid sebagai key 'i'
  return fetch('http://www.omdbapi.com/?apikey=21146527&i=' + imdbid)
    .then(response => response.json())
    .then(d => d);
}

// ~ 2. proses ~
function updateUIDetail(d) {
  // masukan tag html dari function show detail() kedalam variabel
  const movieDetail = showDetail(d);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}

// ~ 3. output ~
function showDetail(d) {
  // kirimkan tag html sebagai value
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${d.Poster}" class="img-fluid">
              </div>
              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h3>${d.Title} (${d.Year})</h3>
                  </li>
                  <li class="list-group-item"><strong>Director : </strong> ${d.Director}</li>
                  <li class="list-group-item"><strong>Actors : </strong> ${d.Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong> ${d.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong> <br> ${d.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`;
}