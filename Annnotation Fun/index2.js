var showMsg = true;
function showdetails(name, age, salary) {
    var test = 100;
    if (showMsg) {
        return "hello".concat(name, ",age is").concat(age, ",salary is ").concat(salary, ", test ").concat(test);
    }
    return "nodata to show";
}
console.log(showdetails("abdo", 40, 5000));
