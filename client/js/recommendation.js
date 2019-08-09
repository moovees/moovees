    function getRecommendation(title) {
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/taste-dive?title=${title}`
        })
        .done( response => {
            for(let i = 0; i < 10; i++) {
                let movie = response[i].Name

                $('#movie-rec').append(`
                <li class="nav-item" onclick="getMovieFromRec('${movie}')">
                    <a class="nav-link" href="#">${movie}</a>
                </li>
                `)
            }
        })
        .fail( err => console.log(err))
    }
    
    
    function getMovieFromRec(title){
    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/search/movie?query=${title}`
    })
    .done( movieId => {
        showDetail(movieId)
    })
    .fail( err => console.log(err))}

