// Do Not Edit The Code Below
var user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName: function () {
        return this.username;
    }
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Create Your Class Here
var Player = /** @class */ (function () {
    // id: number;
    // title: string;
    // level: number;
    function Player(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
        // this.id = id;
        // this.title = title;
        // this.level = level;
    }
    Player.prototype.logIn = function () {
        console.log("Logged In");
    };
    Player.prototype.logOut = function (msg) {
        console.log(msg);
    };
    return Player;
}());
var player1 = new Player(100, "Elzero", 95);
console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye
