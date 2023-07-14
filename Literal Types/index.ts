//literal types
type num = 0|1|-1;
function compare (num1:number, num2:number):num{
    if (num1==num2){
        return 0;
    }
    else if (num1>num2){
        return 1;
    }
    else{
        return -1;
    }
}
console.log(compare(10,10));
console.log(compare(10,20));
console.log(compare(20,10));
