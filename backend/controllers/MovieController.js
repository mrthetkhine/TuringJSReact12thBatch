const MovieService= require('../services/MovieService');

async function getAllMovies(req,res){
    try
    {
        let movies = await MovieService.getAllMovies();
        return res.json(movies);
    }
    catch(err){
        res.status(400).json({error:err});
    }
}
async function getMovieById(req, res){
    try
    {
        let id = req.params.id;
        let movie = await MovieService.getMovieById(id);
        return res.json(movie);
    }
    catch(err){
        res.status(500).json({error:err});
    }
}

async function saveMovie(req, res){
    try
    {
        let movie = req.body;
        let savedMovie = await MovieService.saveMovie(movie);
        return res.status(201).json(savedMovie);
    }
    catch(err){
        res.status(500).json({error:err});
    }
}
async function updateMovie(req, res){
    try
    {
        let id = req.params.id;
        let movie = req.body;
        let updatedMovie = await MovieService.updateMovie(id, movie);
        return res.json(updatedMovie);
    }
    catch(err){
        res.status(500).json({error:err});
    }
}
async function deleteMovie(req, res){
    try
    {
        let id = req.params.id;
        let deletedMovie = await MovieService.deleteMovie(id);
        return res.json(deletedMovie);
    }
    catch(err){
        res.status(500).json({error:err});
    }
}
module.exports = {
    getAllMovies,
    saveMovie,
    getMovieById,
    updateMovie,
    deleteMovie,
}