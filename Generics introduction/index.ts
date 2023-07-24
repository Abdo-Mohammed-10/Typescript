function  returnnumber(params:number):number {
    
   return params;
}
function  returnstring(params:string):string {
    
   return params;
}
function  returnboolean(params:boolean):boolean {
    
   return params;
}


function returntype<generictype>(val:generictype):generictype{
    return val;
}
console.log(returntype<string>("abdulrahamn"));
console.log(returntype<number>(20));
console.log(returntype<boolean>(true));
console.log(returntype<number[]>([1,2,3]));