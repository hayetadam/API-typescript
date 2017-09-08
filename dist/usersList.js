"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserList = /** @class */ (function () {
    //on fait un constrocteur ou bien il faut juste définir users: User[] = []; c'est un tableau vide
    function UserList() {
        this.users = [];
    }
    //ajouter un user
    UserList.prototype.add = function (u) {
        this.users.push(u);
    };
    //supprimer un user
    UserList.prototype.del = function (name) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].name == name) {
                this.users.splice(i, 1);
            }
        }
    };
    // authentification d'utilisateur
    UserList.prototype.auth = function (name, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.name == name && u.password == password) {
                return u;
            }
        }
        return null;
    };
    return UserList;
}());
exports.UserList = UserList;
// tester l'API
/*let list = new UserList();
list.add(new User("toto", "toto"));
list.add(new User("titi", "titi"));
console.log(list);
list.del("toto");
console.log(list);
let u = list.auth("titi", "titi");
console.log(u);*/
//# sourceMappingURL=usersList.js.map