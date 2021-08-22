// ketika tombol search diklik
$('.button-search').on('click', function () {
  // ketika judul film diketik dalam input
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=21146527&s=' + $('.input-keyword').val(),
    success: results => {
      const movies = results.Search;
      let cards = '';
      movies.forEach(m => {
        cards += showMovie(m);
      });
      $('#movie-container').html(cards);

      // ketika tombol detail diklik
      $('.modal-detail-button').on('click', function () {
        $.ajax({
          url: 'http://www.omdbapi.com/?apikey=21146527&i=' + $(this).data('imdb'),
          success: d => {
            const details = showDetail(d);
            $('.modal-body').html(details);
          }
        })
      })
    },
    error: (e) => {
      console.log(e.responseText);
    }
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
