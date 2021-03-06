const axios = require('axios');
const params = {
  api_key: process.env.TMDB_API_KEY,
  language: 'en-US',
  region: 'indonesia'
}

class TmdbController {
  static getDetails(req, res, next) {
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.movie_id}`, {
        params
      })
      .then((response) => {
        res.send(response.data)
      })
      .catch((err) => {
        res.send(err);
      })
  }

  static getPoster(req, res, next) {
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.movie_id}`, {
        params
      })
      .then((response) => {
        const poster_path = response.data.poster_path;
        res.send(`https://image.tmdb.org/t/p/original/${poster_path}`)
      })
      .catch((err) => {
        res.send(err);
      })
  }

  static getPopular(req, res, next) {
    params.page = req.params.page;
    axios.get('https://api.themoviedb.org/3/movie/popular', {
        params
      })
      .then((response) => {
        res.send(response.data.results)
      })
      .catch((err) => {
        res.send(err);
        console.log(err);
      })
  }

  static getTopRated(req, res, next) {
    params.page = req.params.page;
    axios.get('https://api.themoviedb.org/3/movie/popular', {
        params
      })
      .then((response) => {
        res.send(response.data.results)
      })
      .catch((err) => {
        res.send(err);
        console.log(err);
      })
  }

  static searchMovie(req ,res, next) {
    params.page = 1
    params.query = req.query.query
    axios.get('https://api.themoviedb.org/3/search/movie',{ params })
    .then( ({data}) => {
      res.status(200).json(data.results[0].id)
    })
    .catch(err=> {
      console.log('Error')
      next(err)
    })

  }
}

module.exports = TmdbController