const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = new Schema({
    title: { type: String },
    subtitle: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", books);

module.exports = Book;