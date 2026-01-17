var express = require('express');
var router = express.Router();
const ReviewController = require("../controllers/ReviewController");

router.get('/movies/:movieId',ReviewController.getAllReviewByMovieId);
router.post('/',ReviewController.saveReview);
router.put('/:id',ReviewController.updateReview);
router.delete('/:id',ReviewController.deleteReviewById);
module.exports  =router;