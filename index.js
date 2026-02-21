import express from 'express';
import mongoose, { mongo } from 'mongoose';
import moviesRouter from './routes/movies.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/pw2_2026', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

console.log('Server is starting...');
console.log('Loading movies route...');
console.log(moviesRouter);

app.use('/movies', moviesRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});