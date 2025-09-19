abstract class food {
    constructor(public name: string) {
    }
    abstract msg(): void;
}

class piza extends food {
    constructor(name: string, public price: number) {
        super(name);
    }

    msg() {
        console.log(`this is ${this.name} and price is ${this.price}`);
    }
}

class burger extends food {
    constructor(name: string, public price: number) {
        super(name);
    }
    msg() {
        console.log(`this is ${this.name} and price is ${this.price}`);
    }
}

let piza1 = new piza("cheese", 25);
let burger1 = new burger("pepper", 35);

console.log(piza1.name);
console.log(piza1.price);
piza1.msg();
console.log(burger1.name);
console.log(burger1.price);
burger1.msg();

