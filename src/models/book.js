import mongoose from "mongoose";

let BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year:{ type: String, required: true },
    pages:{ type: String, required: true },
    creation: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Book', BookSchema);



