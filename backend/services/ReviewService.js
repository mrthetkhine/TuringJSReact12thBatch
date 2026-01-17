const Review = require("../models/Review");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");

async function getAllReviewByMovieId(movieId){
    let reviews= await Review.find({
        movie:movieId,
    });//.populate("movie");
    return reviews;
}

async function saveReview(review){
    let movie= await Movie.findById(review.movie);
    if(!movie)
    {
        throw new Error("Could not find movie with id "+review.movie);
    }
    review.movie = new mongoose.Types.ObjectId(review.movie);
    let newReview= new Review(review);
    return await newReview.save();
}
async function updateReview(id,review){
    /*
    let existingReview = await Review.findById(id);
    if(!existingReview)
    {
        throw new Error("Could not find review with id "+id);
    }
    else
    {
        let existingMovie = await Movie.findById(review.movie);
        if(!existingMovie)
        {
            throw new Error("Could not find movie with id "+review.movie);
        }
        review.movie = new mongoose.Types.ObjectId(review.movie);
        let updateReview = await Review.findByIdAndUpdate(id,review,{
            new:true,
        })
        return updateReview;
    }*/
    return Review.findById(id)
        .then(rv=>{
            console.log('Review found ',rv);
            if(!rv)
            {
                throw new Error("Could not find review with id "+id)
            }
            return Movie.findById(review.movie);
        })
        .then(mv=>{
            if(!mv)
            {
                throw new Error("Could not find movie with id "+review.movie)
            }
            review.movie = new mongoose.Types.ObjectId(review.movie);
            return Review.findByIdAndUpdate(id,review,{
                new:true,
            })
        });


}
async function deleteReviewById(id){
    let existingReview = await Review.findById(id);
    if(!existingReview)
    {
        throw new Error("Could not find review with id "+id);
    }
    let deletedReview = await Review.findByIdAndDelete(id);
    return deletedReview;
}
module.exports = {
    getAllReviewByMovieId,
    saveReview,
    updateReview,
    deleteReviewById,
}