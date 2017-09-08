"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var user_1 = require("./user");
var usersList_1 = require("./usersList");
exports.userRouter = express.Router();
var list = new usersList_1.UserList();
exports.userRouter.use("/", bodyParser.json());
// We receive a POST request: we create a new user.
exports.userRouter.post("/", function (req, res) {
    var name = req.body.name;
    var pass = req.body.password;
    if (!name || !pass) {
        res.status(400);
        res.send('missing parameter');
        return;
    }
    var u = new user_1.User(name, pass);
    list.add(u);
    res.send(u);
});
// We receive a GET request: we authenticate the user.
exports.userRouter.get("/", function (req, res) {
});
// We receive a DELETE request: we delete an user.
exports.userRouter.delete("/", function (req, res) {
});
//# sourceMappingURL=user-router.js.map