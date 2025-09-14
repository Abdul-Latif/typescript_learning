function calculate(numOne: number, numTwo: number): number {
    return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

console.log();


type s = string | number;

function printInfo(valueOne: s, valueTwo: s) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}



console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20"));

let arr: (number | boolean[] | (string | (string | number)[])[])[];
arr = [5, [true, false], ["string", ["string", 125]]];

function reportErrors(username: string, age: number) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}

console.log(reportErrors("Elzero", 40));

let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c: string) {
    return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero
console.log(nothing);
console.log(theName);

function showMsg(user?: string, age?: number | string, country?: string) {
    return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));


function printInConsole(...values: (string | number | boolean)[]) {
    return values.map((value) => `The Value Is ${value} And Type is ${typeof value}`).join('\n');
}

function printInConsole1(...values: (number | string | boolean)[]) {
    let result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(`The Value Is ${values[i]} And Type is ${typeof values[i]}`);
    }
    return result.join("\n");
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

