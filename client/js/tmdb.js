function showDetail(temp_id) {

  $('#details').show();
  $('.spinner-poster-detail').show()

  $('#poster-image').hide()
  $('#detail-desc').hide()

  $.ajax({
      method: "GET",
      url: `http://localhost:3000/tmdb/${temp_id}`
    })
    .done((res) => {

      $('.spinner-poster-detail').hide()

      $('#detail-desc').show()
      $('#poster-image').show()


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
      $('#star-detail p').text(res.vote_count + ' votes');
      $('#poster img').attr("src", `https://image.tmdb.org/t/p/original/${res.poster_path}`);
      $('#bottom-side').empty().append(
        `
      <p id="detail-desc">${res.overview}</p>
      `
      )
      // $.ajax({
      //     method: 'get',
      //     url: `http://localhost:3000/youtube/search?title=${res.title}`
      //   })
      //   .done(movieId => {

      //     $('.video-detail').empty().append(
      //       `
      //   <iframe width="420" height="315"
      //   src="https://www.youtube.com/embed/${movieId}">
      //   </iframe>
      //   `
      //     )

      //   })
      //   .fail(err => {
      //     console.log(err)
      //   })
    })
}

function seeMorePopular() {
  $.ajax({
      method: "GET",
      url: "http://localhost:3000/tmdb/popular"
    })
    .done(function (res) {

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

      $('#number-title a').on('click', function () {
        const temp_id = $(this).attr('temp-id');
        $('#popular').hide();
        // console.log(temp_id)

        // ------------
        showDetail(temp_id)
      })
    })
}

$(document).ready(() => {
  // $('#details').fadeOut()
  $('#see-more').on('click', () => {
    $('#details').fadeOut();
    $('#popular').show();
    $('.homepage').hide()
  })

  // ================================================================ POPULAR NGELOOP 10x
  $.ajax({
      method: 'GET',
      url: "http://localhost:3000/tmdb/popular/1"
    })
    .done(response => {
      console.log(response)
      for (let i = 0; i < 10; i++) {
        let movie = response[i]
        $('#popular-homepage').append(
          `
        <li>
            <a class="detail-from-right-side" href="#" temp-id="${movie.id}">
                <i class="material-icons p-0 m-0">bookmark</i>
                ${movie.title}
            </a>
        </li>
        `
        )
      }

      $('.detail-from-right-side').on('click', function () {
        let temp_id = $(this).attr('temp-id')
        $('.homepage').hide()
        showDetail(temp_id)
      })

    })
    .fail(err => console.log(err))

  // ================================================================ POPULAR NGELOOP 3x
  $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/tmdb/top_rated/1'
    })
    .done(response => {
      for (let i = 0; i < 3; i++) {
        let movie = response[i]

        $('#carousel-movies').append(
          `
              <div temp-id="${movie.id}" class="popular-homepage-detail col p-0 rounded-0 mx-2 my-3 image-container">
                  <img class="card-img-top p-0 m-0 rounded-0" src="https://image.tmdb.org/t/p/original/${movie.poster_path}"
                      alt="Card image cap">
                  <div class="after">
                      <a class="px-3">
                          ${movie.title}
                      </a>
                      <p class="px-3">
                          ${movie.overview.substr(0,60)}...
                      </p>
                  </div>
              </div>
          `
        )
      }

      // =================================================================== LIAT DETAIL DARI POPULAR HOMEPAGE
      $('.popular-homepage-detail').on('click', function () {
        let temp_id = $(this).attr('temp-id')
        $('.homepage').hide()
        showDetail(temp_id)
      })

      for (let i = 3; i < 7; i++) {
        let movie = response[i]


        // $.ajax({
        //     method: 'get',
        //     url: `http://localhost:3000/youtube/search?title=${movie.title}`
        //   })
        //   .done(movieId => {
        //     console.log(movieId)
        //     $('#detail-movies').empty().append(
        //       `<div class="p-3 border-bottom">
        //                   <h3>${movie.title}</h3>
        //                   <iframe width="420" height="315"
        //                   src="https://www.youtube.com/embed/${movieId}">
        //                   </iframe>
        //                   <p class="mt-3 text-justify">${movie.overview}</p>
        //                   <a href="#">See more...</a>
        //               </div>`
        //     )
        //   })
        //   .fail(err => {
        //     console.log(err)
        //   })
      }
    })
    .fail(err => console.log(err))

  // ================================================================ SEE MORE POPULAR
  seeMorePopular()
})