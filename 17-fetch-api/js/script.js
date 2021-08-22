// Fetch

const searchButton = document.querySelector('.search-button');
// ketika tombol search diklik
searchButton.addEventListener('click', function () {

  const inputKeyword = document.querySelector('.input-keyword');
  // mengambil judul film yang diketik dalam input
  fetch('http://www.omdbapi.com/?apikey=21146527&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {

      const movies = response.Search;
      let cards = '';
      movies.forEach(m => cards += showMovie(m));
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;

      // ketika tombol detail dilkik
      const modalDetailButton = document.querySelectorAll('.modal-detail-button');
      modalDetailButton.forEach(btn => {

        btn.addEventListener('click', function () {

          const imdbid = this.dataset.imdb;
          fetch('http://www.omdbapi.com/?apikey=21146527&i=' + imdbid)
            .then(response => response.json())
            .then(d => {

              const movieDetail = showDetail(d);
              const modalBody = document.querySelector('.modal-body');
              modalBody.innerHTML = movieDetail;
            })
        })
      })
    });

});

function showMovie(m) {

  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdb="${m.imdbID}">See Detail</a>
              </div>
            </div>
          </div>`;
}

function showDetail(d) {

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
