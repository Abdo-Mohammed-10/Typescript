var user = /** @class */ (function () {
    function user(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return "hello ".concat(this.u, "your salary").concat(this.s);
        };
    }
    user.prototype.saymsg = function () {
        "hello ".concat(this.u, "your salary").concat(this.s);
    };
    return user;
}());
var user1 = new user("abdo", 45);
console.log(user1.u);
console.log(user1.s);
console.log(user1.msg());
console.log(user1.saymsg());
