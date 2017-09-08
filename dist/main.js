"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
var express = require("express");
var bodyParser = require("body-parser");
var todo = new todo_1.Todo();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/*
On utilise un Router pr regrouper ttes les routes d'un type particulier, ici,
notre router regroupera les routes liées au Todo's
*/
var router = express.Router(); //on fait un router ac des méthodes et des chemins
//Route permettant de récupérer les todo
router.get('/', function (req, res) {
    res.json(todo.lister());
});
//Route permettant d'ajouter un todo
router.post('/', function (req, res) {
    var nouveau = req.body.nouveau;
    todo.ajouter(nouveau);
    res.end('todo ajouté');
});
//Route permettant de supprimer un todo
router.delete('/:suppr', function (req, res) {
    var suppr = req.params.suppr;
    todo.supprimer(suppr);
    res.end('todo supprimé');
});
app.use('/todo', router);
app.listen(3000);
//# sourceMappingURL=main.js.map