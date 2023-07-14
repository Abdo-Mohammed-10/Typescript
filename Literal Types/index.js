"use strict";
function compare(num1, num2) {
    if (num1 == num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(10, 10));
console.log(compare(10, 20));
console.log(compare(20, 10));
