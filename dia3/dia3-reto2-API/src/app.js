
// Aquí creamos el servidor express

const express = require('express');
const cors = require('cors');
const bookRoutes = require('./router/book.router');


const app = express();

app.set('port', 3000);
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bookRoutes)

module.exports = app;