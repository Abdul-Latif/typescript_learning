// objects 
// object is a collection of related data(properties), and functions(methods) 
// declare an object by using let or const 
// let obj =  {related properties and methods insdie}
// properties and methods are both using :


let student: {
    name: string,
    age: number
    greet: () => void
} = {
    name: "mohammed",
    age: 30,
    greet: function () {
        console.log(`student name is ${this.name}, and his age is ${this.age}`);
    }
}

console.log(student.name);
console.log(student.age);
student.greet();

//////////////////////////////////
type Student = {
    name: string,
    age: number,
    len?: number,
    greet: () => void
}

let student1: Student = {
    name: "ali",
    age: 25,
    greet() {
        console.log(`hello ${this.name} your age is ${this.age}`)
    },
}

console.log(student1.name);
console.log(student1.age);
student1.greet();

/////////////////////////////////
// adding and changing an object

let car: {
    name: string,
    model: number,
    color: string,
    hp: number
} = {
    name: "toyota",
    model: 2015,
    color: "red",
    hp: 1200
}

car.color = "red";
car.hp = 1200;
car.model = 2022

console.log(car);
/////////////////////////////////////
// destructuring

let { name, model, color, hp } = car;
// let {brand, year, prefer, power} = car;

console.log(name);
console.log(model);
console.log(color);
console.log(hp);
// console.log(power);
// console.log(prefer);
// console.log(year);
// console.log(brand);
///////////////////////////////////////
//nested objects

let worker: {
    readonly name: string,
    age: number,
    greet: () => void,
    skills: {
        skill1: string,
        skill2: string,
        skill3?: string
    }
} = {
    name: "ahmed",
    age: 30,
    greet: function () {
        console.log(`hello ${this.name}`);
    },
    skills: {
        skill1: "css",
        skill2: "js",
        // skill3: "python"
    }
}

console.log(worker.name);
// worker.name = "ali",
console.log(worker.age);
console.log(worker.skills.skill1);
console.log(worker.skills.skill2);
console.log(worker.skills.skill3); // undefined
worker.greet();
///////////////////////////////////////////
// objects are often stored in arrays
let users: any = [ // because i really don't know the type i used any type
    { id: 1, name: "ahmed" },
    { id: 2, name: "ali" }
];

console.log(users[0].id);
console.log(users[0].name);
console.log(users[1].id);
console.log(users[1].name);
//////////////////////////////////////////
