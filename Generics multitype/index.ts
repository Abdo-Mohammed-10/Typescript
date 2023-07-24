function returntype<t>(params:t):t {
    return params;
}
console.log(returntype<number>(500));
console.log(returntype<string>("abdulrahman"));

const returnTypeArrowSyntax=<T>(val:T):T =>val;

console.log(returnTypeArrowSyntax<number>(1000));
console.log(returnTypeArrowSyntax<string>("abdulrahman"));


function testtype<t>(params:t):string {
    return `the value is ${params} and type is ${typeof params}`;
}
console.log(testtype<number>(500));
console.log(testtype<string>("abdulrahman"));



function multipletype<t,S>(valueone:t,valuetwo:S):string {
    return `the first value is ${valueone} and second value is ${valuetwo}`;
}
console.log(multipletype<number,string>(500,"ABDO"));
console.log(multipletype<number,string>(1,"abdulrahman"));