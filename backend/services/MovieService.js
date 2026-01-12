const Movie = require("../models/Movie");

async function getAllMovies()
{
    let movies = await Movie.find({});
    return movies;
}
async function saveMovie(movie){
    let newMovie = new Movie(movie);
    let savedMovie = await newMovie.save();
    return savedMovie;
}
async function getMovieById(id){
    let movie = await Movie.findById(id);
    return movie;
}
async function updateMovie(id,movie){
    let updatedMovie = await Movie.findByIdAndUpdate(id,movie,{
        new: true,
    })
    return updatedMovie;
}
async function deleteMovie(id){
    let deletedMovie = await Movie.findByIdAndDelete(id);
    return deletedMovie;
}
module.exports ={
    getAllMovies,
    saveMovie,
    getMovieById,
    updateMovie,
    deleteMovie,
}