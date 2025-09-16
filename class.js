// oop is a programming paradigm nothing more 
// 4 conepts of oop
// Encapsulation → grouping related data + behavior together (inside a class).
// Abstraction → hiding unnecessary details, showing only what’s needed.
// Inheritance → a class can take properties & methods from another class.
// Polymorphism → the same method can behave differently depending on context.
// classes<> encapsulation<>
// classes are like the blueprint of creating objects 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("hello ".concat(this.name, " your age is ").concat(this.age));
    };
    return Person;
}());
// because its a blueprint now we can easily creat NEW object
var person1 = new Person("ali", 30);
console.log(person1.name);
console.log(person1.age);
person1.greet();
// class defines a blueprint.
// constructor is a special method that runs when you create a new object.
// this refers to the current object.
var book = /** @class */ (function () {
    function book(title, pages, isPublished) {
        this.title = title,
            this.pages = pages,
            this.isPublished = isPublished;
    }
    return book;
}());
var b = new book("adventures of madkour in wonderlands", 225, true);
console.log(b.title);
console.log(b.pages);
// console.log(b.title.isPublished);// underfined????
////////////////////////////////////////////////////
// access modifiers >>>>> encapsulation 
var bankAccount = /** @class */ (function () {
    function bankAccount(intialBalance) {
        this.balance = intialBalance;
    }
    bankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    bankAccount.prototype.getBalance = function () {
        console.log("your balance is ".concat(this.balance));
    };
    return bankAccount;
}());
var account1 = new bankAccount(1000);
account1.getBalance();
account1.deposit(500);
account1.getBalance();
// console.log(account1.balance)// instantly this gives an error after making balance private
//use private, public and protected for encapsulation >>>> access modifiers
//short cut >> you can define and initialize properties directly in the constructor parameters by adding access modifiers there
var car = /** @class */ (function () {
    function car(brand, year, hp) {
        this.brand = brand;
        this.year = year;
        this.hp = hp;
    }
    car.prototype.getInfo = function () {
        return "the car is ".concat(this.brand, ", year of manufacturing is ").concat(this.year, ", and horse power is ").concat(this.hp);
    };
    return car;
}());
var car1 = new car("Toyota", 2018, 1200);
console.log(car1.getInfo());
