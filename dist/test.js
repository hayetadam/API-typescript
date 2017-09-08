"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var usersList_1 = require("./usersList");
var list = new usersList_1.UserList();
list.add(new user_1.User("toto", "toto"));
list.add(new user_1.User("titi", "titi"));
if (list.users.length != 2) {
    console.error("expect 2 users in the array");
    process.exit(1);
}
list.del("toto");
if (list.users.length != 1) {
    console.error("expect 1 user got " + list.users.length);
    process.exit(1);
}
var u = list.auth("titi", "titi");
if (u.name != "titi" || u.password != "titi") {
    console.error("expect user titi got ", u);
    process.exit(1);
}
//# sourceMappingURL=test.js.map