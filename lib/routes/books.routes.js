'use strict'

const Joi = require('joi');

let internals = {};
internals.books = require('../data/books.json');

internals.getBooks = function (request, reply) {
    if (request.query.title) {
        return reply(internals.findBooks(request.query.title));
    }
    reply(internals.books);
};

internals.findBooks = function (title) {    
    return Object.keys(internals.books).map(function(key) {
        return  internals.books[key];
    })
    .filter((book) => {
        return book.title.toLowerCase().indexOf(title.toLowerCase())>-1;
    });
};

internals.getBook = function (request, reply) {
    const filtered =  Object.keys(internals.books).filter((bookId) => {
        return bookId == "OLID:"+request.params.id;
    }).pop();

    reply(filtered ? [internals.books[filtered]] : []);    
};

module.exports = [
    {
        method: 'GET',
        path: '/api/books',
        config: {
            handler: internals.getBooks,
            validate: { query: { title: Joi.string() } }
        }
    }, 
    {
        method: 'GET',
        path: '/api/books/{id}',
        handler: internals.getBook
    }
];