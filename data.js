"use strict";
// literal type 
// literal types are static values 
// when we have functions that have a static outputs => use literal type 
Object.defineProperty(exports, "__esModule", { value: true });
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20)); // 0
console.log(compare(30, 20)); // 1
console.log(compare(20, 30)); // -1
let users = [10, "ddd"];
users.push(100);
console.log(users);
let newuser1 = [10, "dfd"];
// newuser1.push(100); //error
// remember that if you run this code it will run because js allows this but it won't be what we want that's the idea with ts
console.log(newuser1);
// actually after revising you don't need readonly to make a tuple it's one way of the two to make it as js will conside tuples array and allow push method anyway
// so <<2>> ways to make tuples in ts
// one by using poistiional type annotations [type1 ,type2,..]
// two by using read only method 
// Deconstruction 
const [id, name] = newuser1;
console.log(id);
console.log(name);
//# sourceMappingURL=data.js.map