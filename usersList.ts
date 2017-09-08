import{User} from'./user';

export class UserList {
    users: User[];
    //ajouter un utilisateur a un tableau utilsateurs
    add(u: User){
        this.users.push(u);
    }
    //suprimer utilisateur de tableau 
    del(u: User){
        // on patcourt le tableau 
     for(let i=0; i < this.users.length; i++){
         //si le nom correspant a l'utilisteur on le suprime avec la function splice
         if(this.users[i].name == u.name){
             this.users.splice(i, 1);
         }
     }
    }
    // autentifier un utilisateur 
    auth(name: string, password: string): User{
        for(let u of this.users){
            if(u.name == name && u.password == password){
                return u;
            }
        }
        return null;
    }
}