
// GENERO LAS FUNCIONES PARA LOS ENDPOINTS.

const Book = require("../models/books");

// let books = null;
let books = [
    {
      id_book: 1,
      id_user: 0,
      title: "Alas de Sangre",
      type: "Belic",
      author: "Rebecca Yarros",
      price: 21.75,
      photo: "pic1",
    },
    {
      id_book: 2,
      id_user: 0,
      title: "Maldita Roma",
      type: "Historic",
      author: "Santiago Posteguillo",
      price: 23.65,
      photo: "pic2",
    }
]

function welcome (req, res) {
    res.send("Bienvenido")
}



function getBooksOrID(req, res) {

    let response;

    const bookId = parseInt(req.query.id_book);
    if (bookId) {
        const book = books.find((b) => b.id_book === parseInt(bookId));
        if (!book) {
            response = { error: true, code: 200, message: `No existe el libro con el id: ${req.query.id_book}` }
            res.send(response)
        }
        response = book;
    } else {
        if (books) {
            response = books;
        } else {
            response = { error: true, code: 200, message: "No hay ningún libro" }
            res.send(response)
        }
        response = books;
    }
    res.send(response)
}



function createNewBook(req, res) {

    let response;

    if (books) {
        const newBook = req.body;
        books.push(newBook);
        response = { error: false, code: 200, message: "Libro añadido correctamentea a tu lista", books }
    } else {
        response = { error: false, code: 200, message: "Libro añadido correctamentea a tu lista vacía", books }
    }
    res.send(response)
}



function updateBook(req, res) {

    let response;

    const bookId = parseInt(req.query.id_book);
    const updatedBook = req.body;
    const index = books.findIndex((b) => b.id_book === bookId);
    if (index === -1) {
        response = { error: true, code: 200, message: `No existe ningún libro con el id: ${req.query.id_book} para modificar` }
    } else {
        if (updatedBook) {
            books[index] = {
                ...books[index],
                ...req.body ?? {}
            }
            response = { error: false, code: 200, message: `El libro con el id: ${req.query.id_book} se ha modificado correctamente`, books }
        } 
    }
    res.send(response)
}



function deleteBook(req, res) {

    let response;

    const bookId = parseInt(req.query.id_book);
    const index = books.findIndex((b) => b.id_book === bookId);
    if (index === -1) {
        response = { error: true, code: 200, message: `No existe ningún libro con el id: ${req.query.id_book} para eliminar` };
    } else {
        books.splice(index, 1);
        response = { error: false, code: 200, message: `El libro con el id: ${req.query.id_book} se ha eliminado correctamente`, books }
    }
    res.send(response)
}


module.exports = {welcome, getBooksOrID, createNewBook, updateBook, deleteBook}














// FUNCIONES GET CON ENDPOINT POR SEPARADO

// function getBooks(req, res) {

//     let response;

//     if(books) {
//         response = books;
//     } else {
//         response = { error: true, code: 200, message: "No hay ningún libro" }
//     }
//     res.send(response)
// }



// function getBookQuery(req, res) {

//     let response;

//     const bookId = parseInt(req.query.id_book);
//     const book = books.find((b) => b.id_book === bookId);

//     if (book) {
//         response = book;
//     } else {
//         response = { error: true, code: 200, message: `No existe el libro con el id: ${req.query.id_book}` }
//     }
//     res.send(response)
// }