const express = require('express')
const app = express()

const books = require('./controllers/books')

// static assets
app.use(express.static('./static'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/bookstore',books)


app.listen(5000, () => {
    console.log('Server is listening at port 5000')
})