// untion and intersection types 
// union type
var all;
all = 10;
all = "dfd";
function greet(msg) {
    console.log("hello ".concat(msg.username));
    console.log("your id is ".concat(msg.id));
    console.log("your status is ".concat(msg.status));
}
greet({ username: "ai", id: 102, status: true });
