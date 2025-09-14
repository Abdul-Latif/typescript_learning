"use strict";
// enums type === enumeration in python
// 
Object.defineProperty(exports, "__esModule", { value: true });
var kids;
(function (kids) {
    kids[kids["five"] = 15] = "five";
    kids[kids["ten"] = 10] = "ten";
})(kids || (kids = {}));
var level;
(function (level) {
    level[level["kid"] = 10] = "kid";
    level[level["easy"] = 9] = "easy";
    level[level["medium"] = 6] = "medium";
    level[level["hard"] = 3] = "hard";
})(level || (level = {}));
let lvl = "easy";
if (lvl === "easy") {
    console.log(`your level is ${lvl} and your time is ${level.kid}`);
}
//# sourceMappingURL=enums.js.map