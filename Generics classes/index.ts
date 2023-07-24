class u<t=string>{
    constructor (public value :t){}
    show (msg :t):void{
        console.log(`${msg}  ${this.value}`);
    }
}
let u1=new u<string> ("abdo");
console.log(u1.value);
u1.show("mohammed");


let u2=new u<number|string>  (2000);
console.log(u2.value);
u2.show("massege");
