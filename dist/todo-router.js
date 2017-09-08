"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
var express = require("express");
var todo = new todo_1.Todo();
/*
On utilise un Router pour regroupe toutes les routes
d'un type particulier, ici, notre router regroupera
les routes liées au Todo's
*/
exports.router = express.Router();
//Route permettant de récupérer les todo
exports.router.get('/', function (req, res) { return res.json(todo.lister()); });
//Route permettant d'ajouter un todo
exports.router.post('/', function (req, res) {
    var nouveau = req.body.nouveau;
    todo.ajouter(nouveau);
    res.end('todo ajouté');
});
//Route peremettant de supprimer un todo
exports.router.delete('/:suppr', function (req, res) {
    var suppr = req.params.suppr;
    todo.supprimer(suppr);
    res.end('todo supprimé');
});
//# sourceMappingURL=todo-router.js.map