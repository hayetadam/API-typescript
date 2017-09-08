import * as express from 'express';
import * as bodyParser from 'body-parser'
import {User} from './user'
import {UserList} from './usersList'

export let userRouter = express.Router();
let list = new UserList();

userRouter.use("/", bodyParser.json());

// We receive a POST request: we create a new user.
userRouter.post("/", function(req, res) {
    let name = req.body.name;
    let pass = req.body.password;
    if (!name || !pass) {
        res.status(400);
        res.send('missing parameter');
        return;
    }
    let u = new User(name, pass);
    list.add(u);
    res.send(u);
});

// We receive a GET request: we authenticate the user.
userRouter.get("/", function(req, res) {
    
});

// We receive a DELETE request: we delete an user.
userRouter.delete("/", function(req, res) {
    
});