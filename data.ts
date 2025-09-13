// literal type 
// literal types are static values 
// when we have functions that have a static outputs => use literal type 

type known = 0 | 1 | -1;

function compare(num1: number, num2: number): known {
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return 1;
    } else {
        return -1;
    }
}

console.log(compare(20, 20)); // 0
console.log(compare(30, 20)); // 1
console.log(compare(20, 30)); // -1

// here we have a comparison where the outputs are known and static whatever numbers we compare we have 3 outputs we won't have any different output
// we can make a literal type where we identify this type and use it with functions as the output
// the output of the function is a value that's why functions don't accept any type value of primitive type

// we simply did this
// function compare(num1: number, num2: number): 0|1|-1
// instead of giving the output raw types we make a literal type that has these types and asign the type to the output function 


// tuples

type user = [number, string]; // tuple type, you assign the type of each index
let users: user = [10, "ddd"];
users.push(100);
console.log(users);
// as you can see we still can change the array. it's a kind of a tuple because now we made the types static at postion but still the numbrs can change so we use readonly to stop that

type newUser = readonly [number, string];

let newuser1: newUser = [10, "dfd"];
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
