// Interface 

// interface user {
//     userName: string,
//     id: number,
//     country: string,
//     sayHello(): string,
//     sayWelcome: () => string,
//     getDouble(num: number): number
// }

// let User: user = {
//     userName: "osama",
//     id: 200,
//     country: "eg",
//     sayHello() {
//         return `hello ${this.userName}`
//     },
//     sayWelcome: () => {
//         return `welcome ${User.userName}`
//     },
//     getDouble(num) {
//         return num * 2;
//     }
// }

// console.log(User.country);
// console.log(User.getDouble(10));
// console.log(User.userName);
// console.log(User.sayHello());
// console.log(User.sayWelcome());
// console.log(User.userName);
// console.log(User.id);


interface settings {
    theme: boolean,
    font: string
}

// Articles
// reopen interface settings 

interface settings {
    sideBar: boolean
}

// contact page
interface settings {
    external: boolean
}
let userSettings: settings = {
    theme: true,
    font: "black",
    sideBar: false,
    external: true
}

console.log(userSettings);

///////////////////////////////////////////////////////////////////////
// interface extend 
