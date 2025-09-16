// oop is a programming paradigm nothing more 
// 4 conepts of oop
// Encapsulation → grouping related data + behavior together (inside a class).
// Abstraction → hiding unnecessary details, showing only what’s needed.
// Inheritance → a class can take properties & methods from another class.
// Polymorphism → the same method can behave differently depending on context.
// classes can have methods only without construction 
// classes are like the blueprint of creating objects 

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) { // constructuor is where a new instance is built
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello ${this.name} your age is ${this.age}`);
    }
}

// because its a blueprint now we can easily creat NEW object

let person1 = new Person("ali", 30);

console.log(person1.name);
console.log(person1.age);
person1.greet();

// class defines a blueprint.
// constructor is a special method that runs when you create a new object.
// this refers to the current object.

class book {
    title: string;
    pages: number;
    isPublished: boolean;

    constructor(title: NamedCurve, pages: number, isPublished: boolean) {
        this.title = title,
            this.pages = pages,
            this.isPublished = isPublished
    }
}

let b = new book("adventures of madkour in wonderlands", 225, true);
console.log(b.title);
console.log(b.pages);
// console.log(b.title.isPublished);// underfined????

////////////////////////////////////////////////////
// access modifiers >>>>> encapsulation 

class bankAccount {
    private balance: number;

    constructor(intialBalance: number) {
        this.balance = intialBalance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }
    getBalance() {
        console.log(`your balance is ${this.balance}`);
    }
}

let account1 = new bankAccount(1000);
account1.getBalance();
account1.deposit(500);
account1.getBalance();
// console.log(account1.balance)// instantly this gives an error after making balance private
//use private, public and protected for encapsulation >>>> access modifiers

//short cut >> you can define and initialize properties directly in the constructor parameters by adding access modifiers there

// class car {
//     constructor(
//         public name: string,
//         private year: number,
//         readonly hp: number
//     ) { }

//     getInfo() {
//         return `the car is ${this.name}, year of manufacturing is ${this.year}, and horse power is ${this.hp}`;
//     }
// }

// let car1 = new car("Toyota", 2018, 1200);

// console.log(car1.getInfo());

// class Student {
//     constructor(
//         public name: string,
//         private age: number,
//         readonly id: number
//     ) { }

//     getInfo() {
//         return `${this.name}, age: ${this.age}, ID: ${this.id}`;
//     }
// }

// let s = new Student("Ali", 22, 101);
// console.log(s.getInfo()); // Ali, age: 22, ID: 101

////////////////////////////////////////
// classes can have noraml methods no need for constructor

class calculator {

    add(num1: number, num2: number) {
        return num1 + num2;
    }

    multiply(num1: number, num2: number) {
        return num1 * num2;
    }
}

let calc = new calculator();

console.log(calc.add(5, 6));
console.log(calc.multiply(5, 6));

class user {
    name: string;
    salary: number;
    msg: () => string;
    constructor(name: string, salary: number) {
        this.name = name,
            this.salary = salary;
        this.msg = function () {
            return `name is ${this.name} and salary is ${this.salary}`
        }
    }
    sayMsg() {
        return `name is ${this.name} and salary is ${this.salary}`
    }

}

let user2 = new user("ahmed", 6000);
console.log(user2.name);
console.log(user2.salary);
console.log(user2.msg());// property 
console.log(user2.sayMsg()); // method


class account {
    private balance: number;

    constructor(intialBalance: number) {
        this.balance = intialBalance;
    }
    show() {
        console.log(`your balance is ${this.balance}`);
    }

    deposit(amount: number) {
        this.balance += amount;
    }
}
let acc = new account(5000);
acc.show();
acc.deposit(5000);
acc.show();
// console.log(acc.balance); // error 

///////////////////////////////////////////
// getter and setter : Special methods to control property access.
class Employee {
    private _salary: number;
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    constructor(salary: number) {
        this._salary = salary;
    }

    // get salary() {
    //     return this._salary;
    // }

    // set salary(newSalary: number) {
    //     if (newSalary < 0) {
    //         throw new Error("salary can't be negative ");

    //     }
    //     this._salary = newSalary;
    // }
}

let emp = new Employee(5000);
console.log(emp.salary);

emp.salary = 7100;
console.log(emp.salary);

/////////////////////////////////
class product {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    }

    get price(): number {
        return this._price;
    }
    set price(newPrice: number) {
        if (newPrice < 0) {
            throw new Error("price can't be negative");
        }
        this._price = newPrice
    }
}

let p = new product(100);
console.log(p.price);
p.price = 120;
console.log(p.price);

//////////////////////////////////////
// class rectangular {
//     constructor(private len: number, private height: number) { }

//     get area(): number {
//         return this.height * this.len;
//     }
// }

// // get is read set is write
// // you can use get by itself alone but set no because set is used to change a varibale
// // get only reads the private var and gives back its value

// let rect = new rectangular(5, 6);
// console.log(rect.area);


// class Person {
//     private full
//     constructor(private firstName: string, private lastName: string) { }

//     get fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let person = new Person("Ali", "Hassan");
// console.log(person.fullName); // Ali Hassan
// // person.fullName = "Other Name"; ❌ Not allowed (no setter)
///////////////////////////////////////////////////

// class implement interface 

interface settings {
    theme: boolean,
    font: string,
    save(): void
}

class User implements settings {
    constructor(public theme: boolean, public readonly font: string) { }
    save(): void {
        console.log("settings saved");
    }
}

