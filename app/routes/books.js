const books = require("./../controllers/books");

module.exports = app => {
    app.route("/books")
        .get(books.getBooks)
        .post(books.createUser);
        
    app.route("/books/:userId")
        .get(books.getUser)
        .put(books.updateUser)
        .delete(books.deleteUser);
};