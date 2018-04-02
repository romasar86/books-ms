const assert = require("chai").assert,
    sinon = require("sinon"),
    proxyquire = require("proxyquire");

describe("Routes/Books", () => {
    describe("module.exports", () => {
        it("it should add routes to app", () => {
            const booksControllerMock = {
                    getBooks: "getBooks",
                    createUser: "createUser",
                    getUser: "getUser",
                    updateUser: "updateUser",
                    deleteUser: "deleteUser"
                },
                books = proxyquire("./../../../app/routes/books", {
                    "./../controllers/books": booksControllerMock
                }),
                routeMock = {},
                appMock = {
                    route: sinon.stub().returns(routeMock)
                };
            routeMock.get = sinon.stub().returns(routeMock);
            routeMock.post = sinon.stub().returns(routeMock);
            routeMock.put = sinon.stub().returns(routeMock);
            routeMock.delete = sinon.stub().returns(routeMock);
            books(appMock);
            assert.isTrue(appMock.route.calledTwice);
            assert.isTrue(appMock.route.calledWith("/books"));
            assert.isTrue(appMock.route.calledWith("/books/:userId"));
            assert.isTrue(routeMock.get.calledTwice);
            assert.isTrue(routeMock.get.calledWith(booksControllerMock.getBooks));
            assert.isTrue(routeMock.get.calledWith(booksControllerMock.getUser));
            assert.isTrue(routeMock.post.calledOnce);
            assert.isTrue(routeMock.post.calledWith(booksControllerMock.createUser));
            assert.isTrue(routeMock.put.calledOnce);
            assert.isTrue(routeMock.put.calledWith(booksControllerMock.updateUser));
            assert.isTrue(routeMock.delete.calledOnce);
            assert.isTrue(routeMock.delete.calledWith(booksControllerMock.deleteUser));
        });
    });
});