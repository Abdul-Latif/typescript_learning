"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
let b;
let c;
a = "a";
b = 10;
c = true;
// we can add 2 types together so we have all the elements in one type 
// function to use these types 
// function is simple as always but because there is a lot of code you get confused but it's simple 
// function name_func(par: type){
// what you want here to do with the function
// }
function actions(btns) {
    console.log(`button for jump is ${btns.up}`);
    console.log(`button for dodge is ${btns.down}`);
    console.log(`button for shoot is ${btns.right}`);
    console.log(`button for take is ${btns.left}`);
    console.log(`button for close is ${btns.x}`);
}
// don't forget you use the name of the function to call the function with {} because the type last is buttons and last which both has {}
// it takes 5 args
actions({ up: "up", down: "down", left: "left", right: "right", x: "X" });
//# sourceMappingURL=alias.js.map