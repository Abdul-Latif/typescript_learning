// untion and intersection types 

// union type


let all: number | string;

all = 10;
all = "dfd";
// all = true; // error 

// intersection type

type user = {
    username: string,
    id: number
}

type status = {
    status: boolean
}

type full = user & status;

function greet(msg: full) {
    console.log(`hello ${msg.username}`);
    console.log(`your id is ${msg.id}`);
    console.log(`your status is ${msg.status}`);
}

greet({ username: "ai", id: 102, status: true });