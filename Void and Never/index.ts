//void & never
function login(massege : string): void{
    console.log(massege);
    return ;
}
console.log(" i am massege")
console.log("no");

const fail=(msg: string) =>{
    throw new Error(msg);
   // return;  
}
 function always(nam:string): never{
    while(true){
     console.log(nam)
    }
 }
 always("abdo");
// console.log("mohammed");



