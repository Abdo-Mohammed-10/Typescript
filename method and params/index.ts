interface user{
    id:number,
    username:string,
    country:string,
    sayhello(): string,
    saywelcom:()=>string,
    getdouble(num:number):number
}
let details :user = {
    id:120,
    username:"abdo",
    country:"egypt",
    sayhello() {
        return `hello ${this.username}`;
    },
    saywelcom:()=>{
        return `welcome ${details.username}`;
    },
    getdouble(n){
        return n*2;
    }
}



    console.log(details.id);
    console.log(details.sayhello());
    console.log(details.saywelcom());
    console.log(details.getdouble(20));

