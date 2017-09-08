"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserList = /** @class */ (function () {
    function UserList() {
    }
    //ajouter un utilisateur a un tableau utilsateurs
    UserList.prototype.add = function (u) {
        this.users.push(u);
    };
    //suprimer utilisateur de tableau 
    UserList.prototype.del = function (u) {
        // on patcourt le tableau 
        for (var i = 0; i < this.users.length; i++) {
            //si le nom correspant a l'utilisteur on le suprime avec la function splice
            if (this.users[i].name == u.name) {
                this.users.splice(i, 1);
            }
        }
    };
    // autentifier un utilisateur 
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
//# sourceMappingURL=usersList.js.map