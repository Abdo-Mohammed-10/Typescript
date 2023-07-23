class player{ 
    constructor (public name :string){}
         attack():void
        {
            console.log("attacking now");
            
        }
}
class amazon extends player{
    constructor(name:string,public spears:number){
        super(name);
    }
    override attack(): void {
        // super.attack();
        console.log("attacking with spear");
        this.spears -=1;
    }
}
let player1= new amazon("abdo",200);
console.log(player1.name);
console.log(player1.spears);
player1.attack();
