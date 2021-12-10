const books = require('../static/books_data')
const Book = require('../models/books');
const mongoose = require('mongoose');
const apiResponse = require("../utils/apiResponse");

// Book Schema
const BookSchema = (data) =>{
    this.author = data.author;
    this.title = data.title;
    this.country = data.country;
    this.language = data.language;
    this.year = data.year;
    this.page = data.page;
    this.imageLink = data.imageLink;
    this.link = data.link;   
}


/**
 * Function getAllBooks fetch the books from mongo db and returns to client
 * @param {*} req 
 * @param {*} res 
 * @returns {Object}
 */
const getAllBooks = (req, res) =>{
        try{
            Book.find({}).then( (data) =>{
                if(data.length > 0){
                    return apiResponse.successResponseWithData(res, "Success", data)
                }else{
                    return apiResponse.successResponseWithData(res, "Success", [])
                }
            })
        }catch(err){
            return apiResponse.errorResponse(res, err)
        }

}

const getBook = (req, res) => {

    try{
        const {id} = req.params
        Book.find({'id': id}).then((data)=>{
            if(data.length > 0){
                return apiResponse.successResponseWithData(res, "Success", data)
            }else{
                return apiResponse.successResponseWithData(res, "Success", [])
            }
        })
    }catch(error){
        return apiResponse.errorResponse(res, err)
    }
}

// const updateBook = (req, res) => {

// }

// const createBook = (req, res) => {

// }

// const deleteBook = (req, res) => {

// }

const searchBooks = (req, res) => {
    const queryParams = req.query

    let author = queryParams[`author`] ? queryParams[`author`].toLowerCase() : null;
    let country = queryParams[`country`] ? queryParams[`country`].toLowerCase() : null;
    let language  = queryParams[`language`] ? queryParams[`language`].toLowerCase() : null;
    let title = queryParams[`title`]  ? queryParams[`title`].toLowerCase() : null;
    let year = queryParams[`year`] || null;

    booklist = books.filter( item => {
        return (
            item.author.toLowerCase().includes(author) || 
            item.country.toLowerCase().includes(country) || 
            item.language.toLowerCase().includes(language) || 
            item.title.toLowerCase().includes(title) ||
            item.year === year
        )
    })
    res.status(200).json(booklist)
}

module.exports = {
    getAllBooks,
    getBook,
    searchBooks
}