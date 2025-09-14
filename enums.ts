// enums type === enumeration in python
// 

enum kids {
    five = 15,
    ten = 10
}

enum level {
    kid = kids.ten,
    easy = 9,
    medium = 6,
    hard = 3
}

let lvl: string = "easy";

if (lvl === "easy") {
    console.log(`your level is ${lvl} and your time is ${level.kid}`);
}


