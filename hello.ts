// arrow function doesn't have a name nor a return but => hence the name 
const add = ((num1: number, num2: number): number => num1 + num2)

// Anonymous function doesn't have a name but has pars and return 
const Aadd = function (num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(10, 20));
console.log(Aadd(10, 20));

function sum(...nums: number[]) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}

console.log(sum(10, 20));

function sums(...nums: number[]) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}

console.log(sums(10, 20));

