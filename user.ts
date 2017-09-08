export class User {
    // chaque utilisateur a un name et un password
    name: string;
    password: string;

    constructor(name, password: string) {
        this.name = name;
        this.password = password;
    }
}