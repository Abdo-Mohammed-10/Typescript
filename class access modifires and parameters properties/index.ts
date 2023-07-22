class User {

    msg:() => string;
    constructor(private username:string,protected salary: number,public readonly address :string){
        
        this.msg= function(){
            return `hello ${this.username}your salary${this.salary}`;
        }
    }
          saymsg (){ 
            return `hello ${this.username}your salary${this.salary}`;
                 
    }
}
 let user1=new User("abdo",45,"monofeya");
// console.log(user1.u)
// console.log(user1.s)
console.log(user1.msg())
console.log(user1.saymsg())