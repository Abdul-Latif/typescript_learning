// objects annotations

let object: {
    username: string,
    id: number,
    status: boolean
} = {
    username: "osama",
    id: 101,
    status: true
}

//updating data 
object.username = "ahmed";
object.id = 102;
// object.id = "d"; // error
object.status = false;

console.log(object.username);
console.log(object.id);
console.log(object.status);

// nested objects

let object1: {
    username: string,
    id: number,
    status: boolean,
    skills: {
        skill1: string,
        skill2: string
    }
} = {
    username: "osama",
    id: 101,
    status: true,
    skills: {
        skill1: "html",
        skill2: "css"

    }
}

let object2: {
    username: string,
    name: string,
    age: number,
    status: boolean,
    skills: {
        skill1: string,
        skill2: string,
        skill3: string
    }
} = {
    username: "ahmed",
    name: "hello",
    age: 50,
    status: true,
    skills: {
        skill1: "html",
        skill2: "css",
        skill3: "js"
    }
}


object2.username = "osama";
object2.name = "all";
object2.age = 30;
object2.skills.skill1 = "nothing"

console.log(object2.username);
console.log(object2.name);
console.log(object2.age);
console.log(object2.skills);
console.log(object2.skills.skill1);
// console.log(object1.skills.skill2);
// console.log(object2.age);
// console.log(object2.skills.skill3);
