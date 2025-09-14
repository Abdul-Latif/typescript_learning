// void 
//type void doesn't return anything 
// for logs

function message(msg: string): void {
    console.log(msg);
}

message("hello!");

// here the function did something but didn't return anything because we made it just do something but doesn't return any data => output of this function is ==> void

// never 
// type never happens when a function is stuck and never return a value in the first place 
// like error and inifinte loops 

// function print(name: string): never {
//     while (true) {
//         console.log(`${name}`);
//     }
//     // return 5;  // unreachable code detected 
//     // the complier will never reach this line of code because it didn't finish the previous code 
//     // type never => never return a value 
// }

// print("hello");

const fail = (msg: string) => {
    throw new Error(msg);
}

fail("heey")

