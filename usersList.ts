import {User} from './user';

export class UserList {
    users: User[];
    //on fait un constrocteur ou bien il faut juste définir users: User[] = []; c'est un tableau vide

    constructor() {
        this.users = [];
    }
    //ajouter un user
    
    add(u: User) {
        this.users.push(u);
    }
//supprimer un user
    del(name: string) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].name == name) {
                this.users.splice(i, 1);
            }
        }
    }
// authentification d'utilisateur
    auth(name: string, password: string): User {
        for (let u of this.users) {
            if (u.name == name && u.password == password) {
                return u;
            }
        }
        return null;
    }
}
// tester l'API

/*let list = new UserList();
list.add(new User("toto", "toto"));
list.add(new User("titi", "titi"));
console.log(list);
list.del("toto");
console.log(list);
let u = list.auth("titi", "titi");
console.log(u);*/