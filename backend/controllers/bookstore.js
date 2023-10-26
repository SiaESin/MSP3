import express from 'express';
import Book from '../models/bookModel.js';

const router = express.Router()  
//main
router.get('/home', (req, res) => {
    res.send('Books Rule!')
    res.render('home')
    
})
//books
router.get('/books', async (req, res) => {
    try{
        const response = await Book.findAll()
        res.render(response)
    }catch(err){
        res.render(err)
    }
    
})
//books add
router.post('/books', (req, res) => {
    db.Book.create(req.body)
    .then(() => {
        res.redirect('/books/:name')
    })
    .catch((err) => {
        res.render(err)
    })
})


//book details
router.get('/books/:name', async (req, res) => {
    const book = await Book.findOne({name: req.params.name})
    res.send(book)
})
router.get('*', (req, res) => {
    res.status(404).send('Not Found')
})


//books detail edit
router.put('/books/:name', (req, res) => {
    db.Book.update(req.body, {where: {name: req.params.name}})
    .then(() => {
        res.redirect('/books')
    })
    .catch((err) => {
        res.render(err)
    })
})

//books delete
router.delete('/books/:name', (req, res) => {
    db.Book.destroy({where: {name: req.params.name}})
    .then(() => {
        res.redirect('/books')
    })
    .catch((err) => {
        res.render(err)
    })
})

export { router as bookRouter }