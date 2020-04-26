const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = new Schema({
    _id: { type: String },
    title: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String }
});

const Book = mongoose.model("Book", books);

module.exports = Book;