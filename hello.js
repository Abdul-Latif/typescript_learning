"use strict";
// function calculate(numOne: number, numTwo: number): number {
//     return numOne + numTwo;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(calculate(10, 20)); // 30
// // console.log(calculate("10", "20")); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2
// console.log();
// type s = string | number;
// function printInfo(valueOne: s, valueTwo: s) {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }
// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20"));
// let arr: (number | boolean[] | (string | (string | number)[])[])[];
// arr = [5, [true, false], ["string", ["string", 125]]];
// function reportErrors(username: string, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
// }
// console.log(reportErrors("Elzero", 40));
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c: string) {
//     return `${a}${b}${c}`;
// }
// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(nothing, nothing, theName)); // Elzero
// console.log(nothing);
// console.log(theName);
// function showMsg(user?: string, age?: number | string, country?: string) {
//     return `${user}${age}${country}`;
// }
// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));
// function printInConsole(...values: (string | number | boolean)[]) {
//     return values.map((value) => `The Value Is ${value} And Type is ${typeof value}`).join('\n');
// }
// function printInConsole1(...values: (number | string | boolean)[]) {
//     let result = [];
//     for (let i = 0; i < values.length; i++) {
//         result.push(`The Value Is ${values[i]} And Type is ${typeof values[i]}`);
//     }
//     return result.join("\n");
// }
// function printInConsole(...nums: (number | string | boolean)[]) {
//     return nums.map((num) => `value is ${num} and type is ${typeof num}`).join('\n');
// }
// type s = number | string | boolean;
// function printInConsole1(...nums: (s)[]) {
//     for (let i = 0; i < nums.length; i++) {
//         console.log(`value is ${nums[i]} and type is ${typeof nums[i]}`);
//     }
// }
// // Using The Function => Do Not Edit
// // console.log(printInConsole(1, 2, 3, 4, 5));
// // console.log(printInConsole("A", "B", "C"));
// // console.log(printInConsole(true, false, false, true, true));
// printInConsole1(1, 2, 3, 4, 5);
// // you don't use logs here becaue function already doens't return anything but it does something and log result
// i have 3 ways of doing something and solve a problem
// i want to take unkown number of args and do some calculations on it
// you want to return the value of each item in the args and its type
// we have 3 ways of doing so
// let numbers: number[];
// let strings: string[];
// let booleans: boolean[];
// type s = (number | string | boolean)[];
// numbers = [1, 2, 3, 4, 5];
// strings = ["A", "B", "C"];
// booleans = [true, false, false, true, true];
///////////////////////////////////////////////////////////////////////////////
// function add(...values: (number | string | boolean)[]) {
//     let result = [];
//     for (let i = 0; i < values.length; i++) {
//         result.push(`the value is ${values[i]} and type is ${typeof values[i]}`);
//     }
//     return result.join("\n");
// }
// console.log(add(1, 2, 3, 4, 5));
// console.log(add("A", "B", "C"));
// console.log(add(true, false, false, true, true));
///////////////////////////////////////////////////////////////////////////////
// function add1(...values: (string | number | boolean)[]) {
//     return values.map((value) => `the value is ${value} and type is ${typeof value}`).join("\n");
// }
// console.log(add1(1, 2, 3, 4, 5));
// console.log(add1("A", "B", "C"));
// console.log(add1(true, false, false, true, true));
// function add2(...values: (string | number | boolean)[]) {
//     for (let i = 0; i < values.length; i++) {
//         console.log(`value is ${values[i]} and type is ${typeof values[i]}`);
//     }
// }
// add2(1, 2, 3, 4, 5);
// add2("a", "b", "c");
// add2(true, false, false, true, true);
// // Write Your Code Here
// type n = number;
// // Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here
// // Write Your Code Here
// type mix = number | boolean;
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here
// // Write Your Code Here
// type Info = {
//     theName: string;
//     theAge: number
// }
// type data = {
//     country: string
// }
// type Full = data & Info;
// // Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
// }
// showInfo({ theName: "Elzero", theAge: 40 });
// function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
// }
// showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" });
// function yesOrNo(val: number): "Yes" | "No" {
//     if (val > 10) {
//         return "Yes"
//     } else {
//         return "No"
//     }
// }
// // Do Not Edit Here
// // console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False
// type custom = "Yes" | "No";
// function isHeOld(age: number): custom {
//     if (age > 40) {
//         return "Yes";
//     } else {
//         return "No";
//     }
// }
// // Do Not Edit Here
// // console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"
// let post: {
//     title: string,
//     id: number,
//     status: boolean
// } = {
//     title: "Title",
//     id: 102,
//     status: false
// }
// // let post: (number | string | boolean)[];
// let post: [number, string, boolean];
// // post = [100, 200, "Title"]; // Error
// // post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good
// // post.push("Elzero"); // Error => Cant Add
// // console.log(post);
// // // Create Destructuring Here
// const [id, title, state] = post;
// // // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true
// tuples
// let post: [number, string, boolean];
// post = [100, "Title", true];
// // post.push("helelo"); // error 
// // Destructuring 
// const [id, title, state] = post;
// console.log(id);
// console.log(title);
// console.log(state);
// function insane(num: number) {
//     return 30 - num;
// }
// // Create Enums + Function Here
// enum level {
//     Easy = 100,
//     Medium = Easy - 20,
//     Hard = Medium - (Easy / 2),
//     Insane = insane(10)
// };
// const Game = {
//     Easy: level.Easy,
//     Medium: level.Medium,
//     Hard: level.Hard,
//     Insane: level.Insane
// };
// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20
const user = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
};
// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = 40;
user.skills.backEnd.push("nestjs");
console.log(user.username);
console.log(user.age);
console.log(user.skills.backEnd);
// console.log(user);
//# sourceMappingURL=hello.js.map