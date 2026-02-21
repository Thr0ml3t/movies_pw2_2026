import { Schema } from "mongoose";

const movieSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true }
});

export default movieSchema;