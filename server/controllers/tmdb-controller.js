const axios = require('axios');
const params = {
  api_key: process.env.TMDB_API_KEY,
  language: 'en-US',
  region: 'indonesia'
}

class TmdbController {
  static getDetails(req, res, next) {
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.movie_id}`, { params })
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.send(err);
    })
  }

  
}

module.exports = TmdbController