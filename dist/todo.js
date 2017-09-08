"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo() {
        this.list = [];
    }
    Todo.prototype.ajouter = function (item) {
        this.list.push(item);
    };
    Todo.prototype.supprimer = function (item) {
        this.list.filter(function (valeur) { return valeur !== item; });
    };
    Todo.prototype.lister = function () {
        return this.list;
    };
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map