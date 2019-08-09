const express = require('express');
const router = express.Router();

const TmdbController = require('../controllers/tmdb-controller');

router.get('/:movie_id', TmdbController.getDetails);
router.get('/:movie_id/poster', TmdbController.getPoster);
router.get('/popular/:page', TmdbController.getPopular);
router.get('/top_rated/:page', TmdbController.getTopRated);
router.get('/search/movie', TmdbController.searchMovie)

module.exports = router