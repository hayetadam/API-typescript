export class Todo {
    private list:string[] = [];
    ajouter(item:string):void {
        this.list.push(item);
    }
    supprimer(item:string):void {
        this.list.filter((valeur) => valeur !== item);
    }
    lister():string[] {
        return this.list;
    }
}