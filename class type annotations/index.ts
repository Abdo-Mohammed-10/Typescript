class user {
    u:string;
    s:number;
    msg:() => string;
    constructor(username,salary){
        this.u=username;
        this.s=salary;
        this.msg=function(){
            return `hello ${this.u}your salary${this.s}`;
        }
    }
        saymsg (){ `hello ${this.u}your salary${this.s}`;
                 
    }
}
 let user1=new user("abdo",45);
console.log(user1.u)
console.log(user1.s)
console.log(user1.msg())
console.log(user1.saymsg())