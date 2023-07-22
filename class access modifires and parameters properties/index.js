var user = /** @class */ (function () {
    function user(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return "hello ".concat(this.username, "your salary").concat(this.salary);
        };
    }
    user.prototype.saymsg = function () {
        "hello ".concat(this.username, "your salary").concat(this.salary);
    };
    return user;
}());
var user1 = new user("abdo", 45, "monofeya");
// console.log(user1.u)
// console.log(user1.s)
console.log(user1.msg());
console.log(user1.saymsg());
