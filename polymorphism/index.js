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
var player = /** @class */ (function () {
    function player(name) {
        this.name = name;
    }
    player.prototype.attack = function () {
        console.log("attacking now");
    };
    return player;
}());
var amazon = /** @class */ (function (_super) {
    __extends(amazon, _super);
    function amazon(name, spears) {
        var _this = _super.call(this, name) || this;
        _this.spears = spears;
        return _this;
    }
    amazon.prototype.attack = function () {
        // super.attack();
        console.log("attacking with spear");
        this.spears -= 1;
    };
    return amazon;
}(player));
var player1 = new amazon("abdo", 200);
console.log(player1.name);
console.log(player1.spears);
player1.attack();
