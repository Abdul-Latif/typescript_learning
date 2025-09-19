var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var food = /** @class */ (function () {
    function food(name) {
        this.name = name;
    }
    return food;
}());
var piza = /** @class */ (function (_super) {
    __extends(piza, _super);
    function piza(name, price) {
        var _this = _super.call(this, name) || this;
        _this.price = price;
        return _this;
    }
    piza.prototype.msg = function () {
        console.log("this is ".concat(this.name, " and price is ").concat(this.price));
    };
    return piza;
}(food));
var burger = /** @class */ (function (_super) {
    __extends(burger, _super);
    function burger(name, price) {
        var _this = _super.call(this, name) || this;
        _this.price = price;
        return _this;
    }
    burger.prototype.msg = function () {
        console.log("this is ".concat(this.name, " and price is ").concat(this.price));
    };
    return burger;
}(food));
var piza1 = new piza("cheese", 25);
var burger1 = new burger("pepper", 35);
console.log(piza1.name);
console.log(piza1.price);
piza1.msg();
console.log(burger1.name);
console.log(burger1.price);
burger1.msg();
