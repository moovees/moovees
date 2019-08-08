$(document).ready(() => {
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/tmdb/384018",
    success: (res) => {
      $('#title-and-desc h1').text(res.title)
      let genre = '';
      for (let i = 0; i < res.genres.length; i++) {
        genre += res.genres[i].name;
        if (i < res.genres.length - 1) {
          genre += ', '
        }
      }
      if (genre.length === 0) {
        genre = 'none'
      }
      $('#title-and-desc p').text(`TV-MA | ${res.runtime} minutes | ${genre} | ${res.status}`)
      $('#star-detail h3').html(res.vote_average + '<span>/10</span>');
      $('#star-detail p').text(res.vote_count);
      $('#poster img').attr("src", `https://image.tmdb.org/t/p/original/${res.poster_path}`);
    }
  })
})