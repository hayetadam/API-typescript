"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var UserList = /** @class */ (function () {
    //on fait un constrocteur ou bien il faut juste définir users: User[] = []; c'est un tableau vide
    function UserList() {
        this.users = [];
    }
    UserList.prototype.add = function (u) {
        this.users.push(u);
    };
    UserList.prototype.del = function (name) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].name == name) {
                this.users.splice(i, 1);
            }
        }
    };
    UserList.prototype.auth = function (name, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var u_1 = _a[_i];
            if (u_1.name == name && u_1.password == password) {
                return u_1;
            }
        }
        return null;
    };
    return UserList;
}());
exports.UserList = UserList;
var list = new UserList();
list.add(new user_1.User("toto", "toto"));
list.add(new user_1.User("titi", "titi"));
console.log(list);
list.del("toto");
console.log(list);
var u = list.auth("titi", "titi");
console.log(u);
//# sourceMappingURL=usersList.js.map