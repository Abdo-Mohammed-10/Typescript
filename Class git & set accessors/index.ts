class User {
   

    msg:() => string;
    constructor(private _username:string,protected salary: number, public readonly address :string){
        
        this.msg= function(){
            return `hello ${this._username} your salary${this.salary}`;
        }
    }
          saymsg (){
            return `hello ${this._username} your salary${this.salary}`;
                 
    }
     get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
}
 let user1=new User("abdo",45,"monofeya");
user1.username="abdulrahman" ;
console.log(user1.msg());
console.log(user1.saymsg());