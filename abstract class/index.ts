abstract class food {
    constructor (public title:string){}
      abstract getcookingtime():void;
}
class pizza extends food{
    constructor(title:string,public price:number){
        super(title)
    }
    getcookingtime(): void {
        console.log("i am pizza");
    }

     }
class burger extends food{
        constructor(title:string,public price:number){
        super(title)
        }
          getcookingtime(): void {
              console.log("i am burger");
          }
     }
let pizza1=new pizza('pizza',100);
console.log(pizza1.title);
console.log(pizza1.price);
pizza1.getcookingtime();