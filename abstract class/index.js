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
    function food(title) {
        this.title = title;
    }
    return food;
}());
var pizza = /** @class */ (function (_super) {
    __extends(pizza, _super);
    function pizza(title, price) {
        var _this = _super.call(this, title) || this;
        _this.price = price;
        return _this;
    }
    pizza.prototype.getcookingtime = function () {
        console.log("i am pizza");
    };
    return pizza;
}(food));
var burger = /** @class */ (function (_super) {
    __extends(burger, _super);
    function burger(title, price) {
        var _this = _super.call(this, title) || this;
        _this.price = price;
        return _this;
    }
    burger.prototype.getcookingtime = function () {
        console.log("i am burger");
    };
    return burger;
}(food));
var pizza1 = new pizza('pizza', 100);
console.log(pizza1.title);
console.log(pizza1.price);
pizza1.getcookingtime();
