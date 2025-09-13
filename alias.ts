type x = string;
type y = number;
type z = boolean;

let a: x;
let b: y;
let c: z;

a = "a";
b = 10;
c = true;


// as we can see here we don't have any problem here because we didn't asign the type
// if we print the value here we will have the last assigned values
// no problem as we didn't assign any type 
// that is type alias in a nutshell 

// now we move to a more advanced example 

type buttons = {
    up: string;
    down: string;
    left: string;
    right: string
}
// that is a type alias with more than one element remember we used {} 

type last = buttons & {
    x: string;
}
// we can add 2 types together so we have all the elements in one type 

// function to use these types 
// function is simple as always but because there is a lot of code you get confused but it's simple 
// function name_func(par: type){
// what you want here to do with the function
// }

function actions(btns: last) { //we used last to inherit the type of both types
    console.log(`button for jump is ${btns.up}`);
    console.log(`button for dodge is ${btns.down}`);
    console.log(`button for shoot is ${btns.right}`);
    console.log(`button for take is ${btns.left}`);
    console.log(`button for close is ${btns.x}`);
}

// don't forget you use the name of the function to call the function with {} because the type last is buttons and last which both has {}
// it takes 5 args
actions({ up: "up", down: "down", left: "left", right: "right", x: "X" });
