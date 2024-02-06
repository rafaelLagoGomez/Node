
// Aquí creamos las funciones para los endpoints.

const Book = require("../models/book");

// let book = null;
let book = new Book(1, 1, "Mad Max", "Fiction", "Byron Kennedy", 25, "pic");


function welcome (req, res) {
    res.send("Bienvenido")
}


function getBook(req, res) {

    let response;

    if(book) {
        response = book;
    } else {
        response = { error: true, code: 200, message: "No hay ningún libro" }
    }
    res.send(response)
}


function createBook(req, res) {

    let response;

    if (!book) {
        book = req.body;
        response = { error: false, code: 200, message: "El libro se ha creado correctamente", book }
    } else {
        response = { error: true, code: 200, message: "El libro ya existe" }
    }
    res.send(response)
}


function updateBook (req, res) {

    let response;

    if (book) {
        book = {
            ...book,
            ...req.body ?? {}
        }
        response = { error: false, code: 200, message: "El libro se ha modificado correctamente", book }
    } else {
        response = { error: true, code: 200, message: "El libro ya existe" }
    }
    res.send(response)
}


function deleteBook (req, res) {

    let response;

    if (book) {
        book = null;
        response = { error: false, code: 200, message: "El libro se ha eliminado correctamente" }
    } else {
        response = { error: true, code: 200, message: "El libro no existe" }
    }
    res.send(response)
}


module.exports = {welcome, getBook, createBook, updateBook, deleteBook}



