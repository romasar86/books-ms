const Models = require("./../models");

class BooksController {

    static errorHandler(res, error) {
        const status = error.type && error.type === "ValidationError" ? 400 : 500,
            message = error.type && error.type === "ValidationError" ? error.message : "Internal Error";
        if(status === 500) console.log(error);
        res.status(status).send(message);
    }

    static responseHandler(res, data) {
        if(!data) return res.send();
        res.json(data);
    }

    static getBooks(req, res) {
        Models.books.findAll()
            .then( data => BooksController.responseHandler(res, data))
            .catch( err  => BooksController.errorHandler(res, err));
    }

    static createUser(req, res) {
        Models.books.insert(req.body)
            .then( () => BooksController.responseHandler(res))
            .catch( err  => BooksController.errorHandler(res, err));
    }

    static getUser(req, res) {
        const id = req.params.userId;
        Models.books.findById(id)
            .then( data => BooksController.responseHandler(res, data))
            .catch( err  => BooksController.errorHandler(res, err));
    }

    static updateUser(req, res) {
        const id = req.params.userId;
        Models.books.update(id, req.body)
            .then( () => BooksController.responseHandler(res))
            .catch( err  => BooksController.errorHandler(res, err));
    }

    static deleteUser(req, res) {
        const id = req.params.userId;
        Models.books.delete(id)
            .then( () => BooksController.responseHandler(res))
            .catch( err  => BooksController.errorHandler(res, err));
    }
}

module.exports = BooksController;