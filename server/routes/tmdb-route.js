const express = require('express');
const router = express.Router();

const TmdbController = require('../controllers/tmdb-controller');
// tmdb/popular
router.get('/:movie_id', TmdbController.getDetails);
router.get('/:movie_id/poster', TmdbController.getPoster);


module.exports = router