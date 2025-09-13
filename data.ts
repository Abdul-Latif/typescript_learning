// rest parameter

function sum(...nums: number[]) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}

console.log(sum(1, 4, 10, 15));


function sums(...nums: number[]) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}

console.log(sums(1, 4, 10, 15));


// Anonymous function  doesn't have a name but has return and {}

const add = function (num1: number, num2: number) {
    return num1 + num2;
}

console.log(add(10, 20));


// Arrow function doesn't have a name of function or reutrn just args and => (args) => result;

const adds = (num1: number, num2: number) => num1 + num2;

console.log(adds(10, 20));
