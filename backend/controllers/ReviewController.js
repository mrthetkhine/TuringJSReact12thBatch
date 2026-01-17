
const ReviewService = require("../services/ReviewService");
async function getAllReviewByMovieId(req,res,next){
    let movieId=req.params.movieId;
    try
    {
        let reviews= await ReviewService.getAllReviewByMovieId(movieId);
        res.json(reviews);
    }
    catch(err){
        res.status(404).send({error:err});
    }

}
async function saveReview(req, res){
    let review = req.body;
    try
    {
        let savedReview = await ReviewService.saveReview(review);
        res.json(savedReview);
    }
    catch(err){
        res.status(400).send({error:err.message});
    }

}
async function updateReview(req, res){
    let id = req.params.id;
    let review = req.body;
    try
    {
        let updatedReview = await ReviewService.updateReview(id,review);
        res.json(updatedReview);
    }
    catch(err)
    {
        res.status(400).send({error:err.message});
    }
}
async function deleteReviewById(req,res,next){
    let id = req.params.id;
    try
    {
        let deletedReview = await ReviewService.deleteReviewById(id);
        res.json(deletedReview);
    }
    catch(err){
        res.status(400).send({error:err.message});
    }
}
module.exports = {
    getAllReviewByMovieId,
    saveReview,
    updateReview,
    deleteReviewById,
}