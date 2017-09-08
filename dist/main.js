"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_router_1 = require("./todo-router");
var user_router_1 = require("./user-router");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//On dit à l'application d'utiliser notre routeur sur
//le chemin /todo
//Toutes les routes définies dedans devront donc être
//précédées de /todo
app.use('/todo', todo_router_1.router);
app.use('/user', user_router_1.userRouter);
app.listen(3000, function (err) {
    if (err) {
        console.error("fail to start server:", err);
        return;
    }
    console.log("listening on 3000...");
});
//# sourceMappingURL=main.js.map