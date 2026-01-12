const express = require('express');
const MovieController = require("../controllers/MovieController");
const router = express.Router();

router.get('/',MovieController.getAllMovies);
router.get('/:id',MovieController.getMovieById);
router.post('/',MovieController.saveMovie);
router.put('/:id',MovieController.updateMovie);
router.delete('/:id',MovieController.deleteMovie);
module.exports = router;