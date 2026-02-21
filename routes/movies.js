import express from 'express';
import mongoose from 'mongoose';
import movieSchema from '../models/movie.js';

const moviesRouter = express.Router();

moviesRouter.get('/', async (req, res) => {
    const movie = mongoose.model('Movie', movieSchema);

    const movies = await movie.find({});

    console.log(movies);

    res.json(movies);
});

moviesRouter.get('/:id', async (req, res) => {
    const movie = mongoose.model('Movie', movieSchema);
    const movieId = req.params.id;
    const foundMovie = await movie.findById(movieId);
    res.json(foundMovie);
});

moviesRouter.post('/', async (req, res) => {
    console.log(req.body);
    const movie = mongoose.model('Movie', movieSchema);
    const newMovie = new movie({
        title: req.body.title || 'Inception',
        director: req.body.director || 'Christopher Nolan',
        year: req.body.year || 2010
    });
    await newMovie.save();
    res.send('New movie added');
});

moviesRouter.patch('/:id', async (req, res) => {
    const movie = mongoose.model('Movie', movieSchema);
    const movieId = req.params.id;
    const updatedData = req.body;
    await movie.findByIdAndUpdate(movieId, updatedData);
    res.send('Movie updated');
});

moviesRouter.delete('/:id', async (req, res) => {
    const movie = mongoose.model('Movie', movieSchema);
    const movieId = req.params.id;
    await movie.findByIdAndDelete(movieId);
    res.send('Movie deleted');
});

export default moviesRouter;