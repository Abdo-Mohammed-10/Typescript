class user{
    private static created :number=0;
    static getcount(): void{
        console.log(`${this.created} objected created`);
    }
    constructor(public username:string){
        user.created++;
    }
}
let u1=new user("abdulrahman");
let u2=new user("student of");
let u3=new user("cs & Ai");
// console.log(user.created);
user.getcount();