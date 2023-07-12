//Rest parameter
function ADDall(...nums: number[]): number {
    let result = 0;
    // for(let i=0 ; i<nums.length; i++){
    //     result+=nums[i]
     //}
    nums.forEach((num) => result += num);
 
    return result;
}

console.log(ADDall(23,54,54,10.66,1,+true));