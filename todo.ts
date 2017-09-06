export class Todo {
    private list:string[] = [];
    ajouter(item:string):void {
        this.list.push(item);
    }
    supperimer(item:string):void {
        this.list.filter((valeur) => valeur !== item);
    }
    lister():string[] {
        return this.list;
    }
}