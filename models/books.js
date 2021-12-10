const mongoose = require('mongoose')
const db = require("../utils/database");

var Schema = mongoose.Schema;

var BookSchema =  new Schema({
    id: { type: Number, required: true},
    title: { type: String, required: true},
    author: { type: String, required: true},
    country: { type: String, required: false},
    language: { type: String, required: true},
    imageLink: { type: String, required: true},
    link: { type: String, required: true},
    page: { type: Number, required: false},
    year: { type: Number, required: false},
}, {timestamps: true});

module.exports = mongoose.model("books", BookSchema);
