const Mongodb = require("./mongodb"),
    validator = require("./validator"),
    Books = require("./books");

let models = {
    books: null
};

module.exports = models;

module.exports.create = options => { 
    const mongodb = new Mongodb(options);
    models.books = new Books(mongodb, validator);
};