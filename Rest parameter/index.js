//Rest parameter
function ADDall() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    // for(let i=0 ; i<nums.length; i++){
    //     result+=nums[i]
    //}
    nums.forEach(function (num) { return result += num; });
    return result;
}
console.log(ADDall(23, 54, 54, 10.66, 1, +true));
