const books = require('../static/books_data')

const getAllBooks = (req, res)=> {
    const {category} = req.query
    let results;
    console.log(category)
    switch(category){
        case 'recent':
            results = ([...books].sort((a,b) => (a.year < b.year) ? 1 : ((b.year < a.year) ? -1: 0))).slice(0,20);
            break;
        default:
            results = books
    }
    res.status(200).json(results)
}

const getBook = (req, res) => {
    const {id} = req.params
    book = books.find(item => item.id == id)
    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).send({message: 'Book Not Found'})
    }
}

// const updateBook = (req, res) => {

// }

// const createBook = (req, res) => {

// }

// const deleteBook = (req, res) => {

// }

const searchBooks = (req, res) => {
    let { query = "" } = req.query
    query = query.toLowerCase()
    booklist = books.filter( item => {
        return (
            item.author.toLowerCase().includes(query) || 
            item.country.toLowerCase().includes(query) || 
            item.language.toLowerCase().includes(query) || 
            item.title.toLowerCase().includes(query)
        )
    })
    console.log(query)
    res.status(200).json(booklist)
}

module.exports = {
    getAllBooks,
    getBook,
    searchBooks
}