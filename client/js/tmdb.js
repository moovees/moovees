$(document).ready(() => {
  $('#details').fadeOut()
  $('.btn-outline-primary').on('click', () => {
    $('#details').fadeOut();
    $('#popular').show();
  })

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/tmdb/popular"
    })
    .done(function(res) {
      for (let i = 0; i < res.results.length; i++) {
        let html = `
        <tr>
          <td>
            <div id="rank-title">
              <div id="thumbnail">
                <img src="https://image.tmdb.org/t/p/original/${res.results[i].poster_path}" alt="">
              </div>
              <div id="number-title">
                <p>${i + 1}. </p>
                <a href="#" temp-id="${res.results[i].id}">${res.results[i].title}</a>
              </div>
            </div>
          </td>
          <td>
            <div id="star">
              <i style="font-size: 25px; color: #e4bb24" class="material-icons">star</i>
              <p>${res.results[i].vote_average}</p>
            </div>
          </td>
        </tr>`
        $('.table > tbody:last-child').append(html);
      }

      $('#number-title a').on('click', function() {
        const temp_id= $(this).attr('temp-id');
        $('#popular').fadeOut();
        $('#details').show();
        // console.log(temp_id)
        
        $.ajax({
          method: "GET",
          url: `http://localhost:3000/tmdb/${temp_id}`
        })
        .done((res) => {
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
        })
      })
    })
})