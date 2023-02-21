const Book = require('../model/bookModel.js')
const mongoose = require('mongoose')

//Get all books
const allBooks = async(req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

//Get a single book
const book = async(req, res) => {   
    
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({error: "Can not find book"}) 
    } 

    const book = await Book.findById(req.params.id)
    res.status(200).json(book)
    
}
//Create a book
const addBook = async(req, res) => {
    const {title, author, last_read_page} = req.body
    try {
        const book = await Book.create({title, author, last_read_page})
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//Delete a book
const deleteBook = async(req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({error:"Can not perform this action"})
    }
    const book = await Book.findByIdAndDelete(req.params.id)
    if(!book){
        return res.status(404).json({error:"Can not find the book"})
    }
    res.status(200).json({msg:"Successfully deleted"})
}

//Update a book
const updateBook = async(req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({error:"Can not perform this action"})
    }
    const book = await Book.findByIdAndUpdate(req.params.id, {...req.body})
    if(!book){
        return res.status(400).json({error:"Can not update book"})
    }
    res.status(200).json(book)

}

module.exports = {
    allBooks,
    book,
    addBook,
    deleteBook,
    updateBook
}