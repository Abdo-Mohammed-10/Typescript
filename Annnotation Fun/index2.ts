let showMsg=true;

function showdetails(name: string, age: number,salary: number): string{
    let test=100;
    if(showMsg){
        return `hello${name},age is${age},salary is ${salary}, test ${test}`;  
    }
    return "nodata to show";
}
console.log(showdetails("abdo",40,5000));
